const JWT = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token; // access token is the name of our token

  if (!token) {
    return res.status(401).json({ message: "Unauthorized :no token provided" });
  }

  JWT.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "FOrbidden:Invalid cookie" });
    } else {
      req.userId = decoded.id; // if token is valid ,attach the decoded user  ID to the request object
      next();
    }
  });
};

module.exports = verifyToken;
