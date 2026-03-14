const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB();

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API is running 🚀' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});