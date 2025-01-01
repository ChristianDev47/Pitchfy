export const CONFIG = {
  SERVER: {
    API: {
      PORT: process.env.PORT || 3000
    },
    BATABASE: process.env.MONGO_URI,
    AUTH: {
      GOOGLE_cLIENT_ID: process.env.GOOGLE_cLIENT_ID,
      GOOGLE_cLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
      SECRET: process.env.SECRET
    }
  }
}