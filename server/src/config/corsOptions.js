const devOrigin = 'http://localhost:5173';

/**
 * CORS configuration: whitelist client origin and allow credentials.
 */
export const corsOptions = {
  origin(origin, callback) {
    if (process.env.NODE_ENV !== 'production') {
      if (!origin || origin === devOrigin) {
        callback(null, true);
        return;
      }
      callback(null, false);
      return;
    }
    const allowed = process.env.CLIENT_URL;
    if (!allowed) {
      callback(null, false);
      return;
    }
    if (!origin || origin === allowed) {
      callback(null, true);
      return;
    }
    callback(null, false);
  },
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
