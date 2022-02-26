const express = require('express');
const {
  registerUser,
  loginUser,
  getUser,
} = require('../controller/userController');
const router = express.Router();

// Register User
router.post('/register', registerUser);
// Login User
router.post('/login', loginUser);
// Get User/Me
router.get('/me', getUser);

module.exports = router;
