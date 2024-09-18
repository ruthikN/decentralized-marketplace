const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['task_creator', 'task_completer'], required: true }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
