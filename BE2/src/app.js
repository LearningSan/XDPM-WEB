const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const roleRoutes = require('./routes/roleRoutes');
const adminRoutes = require('./routes/adminRoutes');


const app = express();
const PORT = process.env.PORT || 5000;

<<<<<<< HEAD
app.use(express.json());

=======
// Middleware
app.use(cors());
app.use(express.json());


// Kết nối Database
>>>>>>> 16a819fb749e5890d6c053ef25c625a22a52efdb
connectDB();

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/roles', roleRoutes);
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API is running 🚀' });
});

<<<<<<< HEAD
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
=======

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);

>>>>>>> 16a819fb749e5890d6c053ef25c625a22a52efdb
});