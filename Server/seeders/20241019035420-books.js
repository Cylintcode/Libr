'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        name: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year_published: 1925,
      },
      {
        name: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year_published: 1960,
      },
      {
        name: '1984',
        author: 'George Orwell',
        year_published: 1949,
      },
      {
        name: 'Pride and Prejudice',
        author: 'Jane Austen',
        year_published: 1813,
      },
      {
        name: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        year_published: 1951,
      },
      {
        name: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        year_published: 1954,
      },
      {
        name: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        year_published: 1937,
      },
      {
        name: 'Moby-Dick',
        author: 'Herman Melville',
        year_published: 1851,
      },
      {
        name: 'War and Peace',
        author: 'Leo Tolstoy',
        year_published: 1869,
      },
      {
        name: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        year_published: 1866,
      },
      {
        name: 'Brave New World',
        author: 'Aldous Huxley',
        year_published: 1932,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('books', null, {} )
  }
};
