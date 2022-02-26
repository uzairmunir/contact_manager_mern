const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// desc  Register User
//api    /api/users/register
//access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ msg: 'Please add all fields' });
  }
  // Check if email already exists
  const existedUser = await User.findOne({ email });
  if (existedUser) {
    res.status(400).json({ msg: 'User with this email already exists.' });
  }
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  // Create new User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateJWT(user._id),
    });
  } else {
    res.status(400).json({ msg: 'Invalid User data' });
  }
});

// desc  Login User
//api    /api/users/login
//access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  // Check for user
  if (!user) {
    return res
      .status(400)
      .json({ msg: 'User with this email dose not exists' });
  }
  // check user validations
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateJWT(user._id),
    });
  } else {
    res.status(400).json({ msg: 'Invalid Credentials' });
  }
});

// desc  Get User
//api    /api/users/me
//access  Private
const getUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// Generate JWT
const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT, { expiresIn: '30d' });
};

module.exports = { registerUser, loginUser, getUser };
