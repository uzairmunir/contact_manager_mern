const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, 'This field is required'],
    },
    email: {
      type: String,
      require: [true, 'This field is required'],
      unique: true,
    },
    password: {
      type: String,
      require: [true, 'This field is required'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
