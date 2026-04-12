import { GoogleGenerativeAI } from '@google/generative-ai';
import Notice from '../models/Notice.js';
import Faculty from '../models/Faculty.js';
import Announcement from '../models/Announcement.js';
import { ApiError } from '../utils/apiError.js';
import { apiSuccess } from '../utils/apiResponse.js';
import { logger } from '../utils/logger.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

const FALLBACK_REPLY =
  "I'm having trouble right now. Please contact the department directly.";
const UNKNOWN_REPLY =
  "I don't have that information. Please contact the department at cse@vssut.ac.in";

let genAIInstance = null;
function getGenAI() {
  if (!genAIInstance && process.env.GEMINI_API_KEY) {
    genAIInstance = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  }
  return genAIInstance;
}

/**
 * Department chatbot using Google Gemini and live DB context.
 */
export const chat = asyncHandler(async (req, res) => {
  const { message } = req.body;
  if (!message || typeof message !== 'string') {
    throw new ApiError(400, 'Message is required');
  }
  const trimmed = message.trim();
  if (!trimmed) {
    throw new ApiError(400, 'Message is required');
  }
  if (trimmed.length > 500) {
    throw new ApiError(400, 'Message must be 500 characters or less');
  }

  // Basic Prompt Injection Mitigation
  const lowerMsg = trimmed.toLowerCase();
  if (
    lowerMsg.includes('ignore all previous') ||
    lowerMsg.includes('forget previous instructions') ||
    lowerMsg.includes('you are now') ||
    lowerMsg.includes('system prompt')
  ) {
    throw new ApiError(400, 'Invalid request content detected.');
  }

  const hodName = process.env.HOD_NAME || 'Dr. Department Head';

  const [notices, faculty, now] = await Promise.all([
    Notice.find({ status: 'published' }).sort({ createdAt: -1 }).limit(25).lean(),
    Faculty.find().sort({ displayOrder: 1 }).lean(),
    Promise.resolve(new Date()),
  ]);

  const activeAnnouncements = await Announcement.find({
    isActive: true,
    startDate: { $lte: now },
    endDate: { $gte: now },
  })
    .sort({ startDate: -1 })
    .lean();

  const facultyLines = faculty.map((f) => {
    const areas = Array.isArray(f.researchAreas) ? f.researchAreas.join(', ') : '';
    return `- ${f.name} (${f.designation})${areas ? ` — Research: ${areas}` : ''}`;
  });

  const noticeLines = notices.map((n) => {
    const d = n.createdAt ? new Date(n.createdAt).toISOString().slice(0, 10) : '';
    return `- ${n.title} (${d})`;
  });

  const announcementLines = activeAnnouncements.map((a) => `- ${a.title}`);

  const systemPrompt = `You are a helpful assistant for the Department of Computer Science and Engineering, VSSUT Burla. Answer questions ONLY based on the department data provided below. If you don't know the answer, respond with exactly this sentence: ${UNKNOWN_REPLY}. Be concise and friendly.

DEPARTMENT DATA:
Faculty:
${facultyLines.length ? facultyLines.join('\n') : '- (none listed)'}

Notices:
${noticeLines.length ? noticeLines.join('\n') : '- (none listed)'}

Announcements:
${announcementLines.length ? announcementLines.join('\n') : '- (none active)'}

General Info:
- Department: Computer Science and Engineering, VSSUT Burla, Odisha
- Programs: B.Tech CSE, M.Tech CSE, PhD
- HOD: ${hodName}
- Contact: cse@vssut.ac.in
- Website: cse.vssut.ac.in`;

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    logger.error('GEMINI_API_KEY is not configured');
    return res.status(200).json(apiSuccess({ reply: FALLBACK_REPLY }));
  }

  const modelName = process.env.GEMINI_MODEL || 'gemini-1.5-flash';

  try {
    const genAI = getGenAI();
    const model = genAI.getGenerativeModel({
      model: modelName,
      systemInstruction: systemPrompt,
      generationConfig: {
        maxOutputTokens: 300,
        temperature: 0.5,
      },
    });

    const result = await model.generateContent(trimmed);
    const text = result.response?.text()?.trim();
    if (!text) {
      return res.status(200).json(apiSuccess({ reply: FALLBACK_REPLY }));
    }
    res.status(200).json(apiSuccess({ reply: text }));
  } catch (err) {
    logger.error('Gemini API error', { message: err.message });
    res.status(200).json(apiSuccess({ reply: FALLBACK_REPLY }));
  }
});
