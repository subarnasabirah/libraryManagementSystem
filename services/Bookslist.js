const mongoose = require('mongoose');

const BookslistSchema = mongoose.Schema({
      serial: {
        type: Number,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    bookid: {
        type: Number,
        require: true
    },
});

module.exports = mongoose.model('Bookslist', BookslistSchema);