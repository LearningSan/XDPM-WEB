const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true }, // BẮT BUỘC PHẢI CÓ DÒNG NÀY
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  // các trường khác nếu có...
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema, 'User');