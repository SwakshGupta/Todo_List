const express = require("express");
const router = express.Router(); // Use express.Router()

router.get("/", (req, res) => {
  res.clearCookie("access_token"); // Clear the access token cookie
  res.status(200).json({ message: "Logged out successfully" }); // Send a response
});

module.exports = router;
