const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
<<<<<<< HEAD
  
  username: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  role: {
    type: String,
    enum: ['user',  'admin'], 
    default: 'user'
  },
  email: {
  type: String,
  required: [true, 'Email is required'],
  unique: true,      
  lowercase: true,   
  trim: true
  },
password: {
    type: String,
    
    default:''
  },
  avatar: {
    type: String,
    default: 'https://i.pravatar.cc/150' // Ảnh mặc định nếu user chưa tải lên
  },
}, {
  timestamps: true,
=======
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true }, // Chú ý: Đổi từ 'password' thành 'passwordHash'
  name: { type: String },
  bio: { type: String },
  avatar: { type: String },
  location: { type: String },
  role: { type: String, default: 'user' },
  followersCount: { type: Number, default: 0 },
  followingCount: { type: Number, default: 0 },
  isBanned: { type: Boolean, default: false }, 
  
  createdAt: { type: Date, default: Date.now }

>>>>>>> eaf6327 (update for new db)
});

module.exports = mongoose.model('User', userSchema);