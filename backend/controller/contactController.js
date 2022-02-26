const asyncHandler = require('express-async-handler');

//desc          Get All Contacts
//route         /api/contacts/
//access        Private
const getContacts = asyncHandler(async (req, res) => {
  res.json({ msg: 'All Contacts' });
});

//desc          Create Contact
//route         /api/contacts/
//access        Private
const createContact = asyncHandler(async (req, res) => {
  res.json({ msg: 'New Contact' });
});

//desc          Update Contact
//route         /api/contacts/:id
//access        Private
const updateContact = asyncHandler(async (req, res) => {
  res.json({ msg: 'Update' });
});

//desc          Delete Contact
//route         /api/contacts/:id
//access        Private
const deleteContact = asyncHandler(async (req, res) => {
  res.json({ msg: 'Delete' });
});

module.exports = { getContacts, createContact, updateContact, deleteContact };
