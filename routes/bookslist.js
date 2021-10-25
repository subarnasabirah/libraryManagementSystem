const express = require('express');
const router = express.Router();
const Bookslist = require('../services/Bookslist');

 //GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
   try {
      const bookslist = await Bookslist.find();
      res.json(bookslist);
   } catch (err) {
      res.json({ message: err });
   }
 });

 //SUBMITS A POST
router.post('/', async (req, res) => {
   const bookslist = new Bookslist({
      serial: req.body.serial,
      title: req.body.title,
      category: req.body.category,
      author: req.body.author,
      bookid: req.body.bookid
   });

   try {
      const saveBookslist = await bookslist.save();
      res.json(saveBookslist);
   } catch (err) {
      res.json({ message: err });
   }
     
});

//SPECIFIC POST
router.get('/:bookslistId', async (req, res) => {
   try {
      const bookslist = await Bookslist.findById(req.params.bookslistId);
      res.json(bookslist);
   } catch (err) {
      res.json({ message: err });
  }
});

//Update a Post

router.patch('/:booksId', async (req, res) => {
   try {
      const updatedBook = await Bookslist.updateOne(
         { _id: req.params.booksId },
         {$set: { title: req.body.title } }
      );
      res.json(updatedBook);
   } catch (err) {
      res.json({ message: err });
   }
});

//Delete Post

router.delete('/:booksId', async (req, res) => {
   try {
      const removedBook = await Bookslist.remove({ _id: req.params.booksId });
      res.json(removedBook);
   } catch (err) {
      res.json({ message: err });
   }
});

module.exports = router;