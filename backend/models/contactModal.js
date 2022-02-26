const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: [true, 'This field is required'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, 'This field is required'],
    },
    type: {
      type: String,
      default: 'Personal',
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Contacts', contactSchema);
