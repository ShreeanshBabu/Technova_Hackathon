import { useStaggerSectionReveal } from '../hooks/useScrollReveal.js';

const programmes = [
  {
    name: 'B.Tech — Computer Science & Engineering',
    summary:
      'Four-year undergraduate programme covering algorithms, systems, software engineering, and electives aligned with industry and research trends.',
    syllabusLabel: 'Syllabus & schemes (VSSUT)',
    syllabusHref: 'https://www.vssut.ac.in/',
  },
  {
    name: 'M.Tech — Computer Science & Engineering',
    summary:
      'Postgraduate depth in advanced topics with project work; ideal for careers in R&D, product engineering, and higher studies.',
    syllabusLabel: 'PG regulations & syllabus',
    syllabusHref: 'https://www.vssut.ac.in/',
  },
  {
    name: 'Ph.D. — Computer Science & Engineering',
    summary:
      'Research training with faculty guidance across core and interdisciplinary areas. Prospective scholars should follow university admission notices.',
    syllabusLabel: 'Research & admissions',
    syllabusHref: 'https://www.vssut.ac.in/',
  },
];

export function Academics() {
  const ref = useStaggerSectionReveal();

  return (
    <div className="academics container">
      <header>
        <h1 className="section-title" data-reveal>
          Academics
        </h1>
        <p className="section-lead" data-reveal data-reveal-delay="0.06">
          Programme outlines and pointers to official syllabus resources. Replace outbound links
          with your department PDFs or LMS when ready.
        </p>
      </header>

      <div ref={ref} className="academics__grid grid-responsive">
        {programmes.map((p) => (
          <article key={p.name} className="glass-panel academics-card card-interactive" data-stagger-child>
            <h2 className="academics-card__title">{p.name}</h2>
            <p className="academics-card__body">{p.summary}</p>
            <a
              className="btn btn--primary academics-card__link"
              href={p.syllabusHref}
              target="_blank"
              rel="noreferrer"
            >
              {p.syllabusLabel}
            </a>
          </article>
        ))}
      </div>

      <section className="academics__meta glass-panel" data-reveal>
        <h2 className="academics__meta-title">Curriculum philosophy</h2>
        <p>
          Courses balance theoretical foundations with laboratories and projects. Outcomes are
          mapped to graduate attributes emphasising ethics, communication, and lifelong learning —
          consistent with NBA guidelines and institutional vision.
        </p>
      </section>

      <style>{`
        .academics {
          padding-bottom: var(--space-section);
        }
        .academics__grid {
          margin-top: 2rem;
        }
        .academics-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-height: 100%;
        }
        .academics-card__title {
          margin: 0;
          font-size: 1.15rem;
          line-height: 1.35;
        }
        .academics-card__body {
          margin: 0;
          flex: 1;
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .academics-card__link {
          align-self: flex-start;
        }
        .academics__meta {
          margin-top: 2.5rem;
          padding: 1.75rem 2rem;
          max-width: 48rem;
        }
        .academics__meta-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 400;
          margin: 0 0 0.75rem;
        }
        .academics__meta p {
          margin: 0;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}
