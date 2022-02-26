const express = require('express');
const {
  registerUser,
  loginUser,
  getUser,
} = require('../controller/userController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// Register User
router.post('/register', registerUser);
// Login User
router.post('/login', loginUser);
// Get User/Me
router.get('/me', auth, getUser);

module.exports = router;
