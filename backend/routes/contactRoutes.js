const express = require('express');
const {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} = require('../controller/contactController');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

// get contacts
router.get('/', auth, getContacts);
// create contacts
router.post('/', auth, createContact);
//update contact
router.put('/:id', auth, updateContact);
// delete contact
router.delete('/:id', auth, deleteContact);

module.exports = router;
