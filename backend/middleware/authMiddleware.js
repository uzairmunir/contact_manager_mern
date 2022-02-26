const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const auth = asyncHandler(async (req, res, next) => {
  let token = req.header('auth-token');

  // Verify Token
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT);
      // Get user from token
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      return res.status(400).json({ msg: 'Invalid Token' });
    }
  }

  if (!token) {
    res.status(400).json({ msg: 'Access Denied token missing' });
  }
});

module.exports = auth;
