const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const app = express();

//Port
const PORT = process.env.PORT || 5000;

//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rotes
app.use('/api/users/', require('./routes/userRoutes'));

// Connect to DB
connectDB();
//Listen to server
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
