const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware to parse incoming JSON
app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Connect to MongoDB
mongoose.connect('mongodb+srv://adarshpratapsingh5019_db_user:adarshpratapsingh5019_db_user@cluster0.sshy40f.mongodb.net/',{
  dbName: "UserData"
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Failed to connect to MongoDB:', err);
});

// Use authentication routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
