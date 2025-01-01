import jwt from 'jsonwebtoken';

const ensureAuth = (req, res, next) => {
  const token = req.cookies.authToken; 

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" }); 
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return next(); 
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
export {ensureAuth}