const express = require('express');
const {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} = require('../controller/contactController');
const router = express.Router();

// get contacts
router.get('/', getContacts);
// create contacts
router.post('/', createContact);
//update contact
router.put('/:id', updateContact);
// delete contact
router.delete('/:id', deleteContact);

module.exports = router;
