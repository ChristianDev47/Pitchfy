import cors from "cors";

const ACCEPTED_ORIGINS = [
  "http://localhost:3000",
  "https://pitchfy.onrender.com",
  "http://localhost:4321",
  "https://pitchfy.vercel.app",
  "https://www.pitchfy.co"
];

export const corsMiddlewares = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes(origin)) {
        return callback(null, true);
      }

      if (!origin) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  });
