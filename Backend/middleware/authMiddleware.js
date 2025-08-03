// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id };  // Important: directly add user ID
    next();
  } catch (err) {
    res.status(401).json({ success: false, message: "Invalid token." });
  }
};

module.exports = verifyUser;
