// controllers/books_controller.js
const books = require('express').Router(); // Import the express router method
const db = require('../models');
const { Book } = db;

// GET all books
books.get('/', async (req, res) => {
  try {
    const allBooks = await Book.findAll();
    res.status(200).json(allBooks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Export the router
module.exports = books;