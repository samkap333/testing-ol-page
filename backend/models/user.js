const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true,unique: false },
  phoneNumber: { type: Number, required: true, unique: false },
  email: { type: String, required: true, unique: false },
  subject: { type: String, required: true},
  message: { type: String, required: true},
  createdAt: { type: Date, default: Date.now }
  
});

module.exports = mongoose.model("Users", userSchema);
