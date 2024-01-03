const { UnauthenticatedError } = require("../errors");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  // User is coming from models and password is hashed before creating a new user
  const user = await User.create({ ...req.body });
  // createJWT is coming from models
  const token = user.createJWT();
  // creating shallow copy of the items in req.body
  res.json({ user: { name: user.name }, token });
};

// login function
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("please provide email and password");
  }
  //This code attempts to find a user in the database using the provided email. It uses the User model and the Mongoose findOne method to search for a user document with a matching email.
  const user = await User.findOne({ email });

  if (!user) {
    throw new UnauthenticatedError("invalid user");
  }
  
  // comparePassword is coming from models
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid password");
  }
  // creating jwt for login and the code for jwt creation is in models in user.js
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name, token } });
};
module.exports = {
  register,
  login,
};
