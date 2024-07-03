// here i will hash the password and we will generate the token if the user login
const JWT = require("jsonwebtoken");
const createError = require("http-errors");
const User = require("../models/user");

const secretKey = process.env.JWT_SECRET || "123456";

const loginUser = async (req, res, next) => {
  const { Email, Password } = req.body;

  if (!Email || !Password) {
    return next(createError(400, "Email and Password are required"));
  }

  try {
    const user = await User.findOne({ Email });

    if (!user) {
      return next(createError(404, "User not found"));
    }

    // Check if the password matches (without bcrypt)
    if (Password !== user.Password) {
      return next(createError(400, "Wrong username or password"));
    }

    // If password matches, generate JWT token
    const token = JWT.sign({ id: user._id }, secretKey);

    // Remove the password field from user data
    const { Password: userPassword, ...otherDetails } = user._doc;

    // Set the token in the cookie and send user details in response
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(otherDetails);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  loginUser,
};
