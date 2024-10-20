// DEPENDENCY
const express = require('express'); 
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');

// Configuration / middleware
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//controllers
const booksController = require('./controllers/books_controller');
app.use('/api/books', booksController);

// Listen
app.listen(4005, () => {
    console.log(`Server is running on port 4005`);
});