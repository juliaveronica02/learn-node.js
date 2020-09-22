const Book = require("../models/book")

module.exports = {
    createData: (req, res) => {
        Book.create({
            bookTitle: req.body.bookTitle,
            years: req.body.years,
            description: req.body.description,
            image: req.file && req.file.path,
            bookNumber: req.body.bookNumber,
            status: req.body.status
        })
        .then ((result)=>{
            res.json({ message:"Successfully Create Data.", data:result})
        })
    },
    getBookData: (req, res) => {
        Book.findAll()
        .then((result) => res.json(result))
        .catch((err) => {
          throw err;
        });
    },
    getBookById: (req, res) => {
        Book.findOne({where: {id: req.params.bookId}})
        .then((result) => res.json(result))
        .catch((err) => {
          throw err;
        });
    },
    deleteBookById: (req, res) => {
        Book.destroy({where: {id: req.params.bookId}})
        .then((result) => res.json(result))
        .catch((err) => {
          throw err;
        });
    },
    updateBookById: (req, res) => {
        Book.update({
            bookTitle: req.body.bookTitle,
            years: req.body.years,
            description: req.body.description,
            image: req.file && req.file.path,
            bookNumber: req.body.bookNumber,
            status: req.body.status
        },  { where: { id: req.params.bookId } })
        .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
    }
}