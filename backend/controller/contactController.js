const asyncHandler = require('express-async-handler');
const Contacts = require('../models/contactModal');

//desc          Get All Contacts
//route         /api/contacts/
//access        Private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contacts.find({ user: req.user.id });
  if (!contacts) {
    return res.status(400).json({ msg: 'Contacts Dose Not exists' });
  }
  res.status(200).json(contacts);
});

//desc          Create Contact
//route         /api/contacts/
//access        Private
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone, type } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ msg: 'Please add required fields' });
  }
  const contact = await Contacts.create({
    name,
    email,
    phone,
    type,
    user: req.user.id,
  });
  if (contact) {
    res.json({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      type: contact.type,
    });
  } else {
    return res.status(400).json({ msg: 'Invalid Credentials' });
  }
});

//desc          Update Contact
//route         /api/contacts/:id
//access        Private
const updateContact = asyncHandler(async (req, res) => {
  const { name, email, phone, type } = req.body;
  let contactFields = {};
  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;

  // Find contact by id
  let contact = await Contacts.findById(req.params.id);
  //check if contact dose not exists
  if (!contact) {
    return res.status(400).json({ msg: 'This contact dose not exists.' });
  }
  //if the contact exists then make sure the currently signed in user owns the contact
  if (contact.user.toString() !== req.user.id) {
    return res
      .status(400)
      .json({ msg: 'You Do not have authorization to Update contact' });
  }
  contact = await Contacts.findByIdAndUpdate(
    req.params.id,
    { $set: contactFields },
    { new: true }
  );
  res.json(contact);
});

//desc          Delete Contact
//route         /api/contacts/:id
//access        Private
const deleteContact = asyncHandler(async (req, res) => {
  // Find contact by id
  let contact = await Contacts.findById(req.params.id);
  //check if contact dose not exists
  if (!contact) {
    return res.status(400).json({ msg: 'This contact dose not exists.' });
  }
  //if the contact exists then make sure the currently signed in user owns the contact
  if (contact.user.toString() !== req.user.id) {
    return res
      .status(400)
      .json({ msg: 'You Do not have authorization to Update contact' });
  }
  contact.remove();
  res.json({ msg: 'Contact Deleted' });
});

module.exports = { getContacts, createContact, updateContact, deleteContact };
