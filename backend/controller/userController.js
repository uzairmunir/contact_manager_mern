const asyncHandler = require('express-async-handler');

// desc  Register User
//api    /api/users/register
//access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ msg: 'Register' });
});

// desc  Login User
//api    /api/users/login
//access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ msg: 'Login' });
});

// desc  Get User
//api    /api/users/me
//access  Private
const getUser = asyncHandler(async (req, res) => {
  res.json({ msg: 'User' });
});

module.exports = { registerUser, loginUser, getUser };
