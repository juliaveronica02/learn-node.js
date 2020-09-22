const express = require("express")
const router = express.Router()
const multer = require("multer");
const Book = require("../Controllers/book")

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
});

router.get("/show", Book.getBookData)
router.get("/show/:bookId", Book.getBookById)
router.post("/create", upload.single("image"), Book.createData)
router.put("/update/:bookId", upload.single("image"), Book.updateBookById)
router.delete("/delete/:bookId", Book.deleteBookById)

module.exports = router;