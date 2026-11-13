const Book = require("../models/bookModel");

const validate = (b) => {
  if (!b.title || !b.author || !b.category || b.publishedYear === undefined || b.available === undefined)
    return "All fields (title, author, category, publishedYear, available) are required";
  if (typeof b.publishedYear !== "number") return "publishedYear must be a number";
  if (typeof b.available !== "boolean") return "available must be a boolean";
  return null;
};

exports.getAllBooks = (req, res) => {
  res.status(200).json({ success: true, data: Book.getAll() });
};

exports.getBookById = (req, res) => {
  const book = Book.getById(Number(req.params.id));
  if (!book) return res.status(404).json({ success: false, message: "Book not found" });
  res.status(200).json({ success: true, data: book });
};

exports.createBook = (req, res) => {
  const error = validate(req.body);
  if (error) return res.status(400).json({ success: false, message: error });
  const book = Book.create(req.body);
  res.status(201).json({ success: true, data: book });
};

exports.updateBook = (req, res) => {
  const error = validate(req.body);
  if (error) return res.status(400).json({ success: false, message: error });
  const book = Book.update(Number(req.params.id), req.body);
  if (!book) return res.status(404).json({ success: false, message: "Book not found" });
  res.status(200).json({ success: true, data: book });
};

exports.patchBook = (req, res) => {
  const b = req.body;
  if (b.publishedYear !== undefined && typeof b.publishedYear !== "number")
    return res.status(400).json({ success: false, message: "publishedYear must be a number" });
  if (b.available !== undefined && typeof b.available !== "boolean")
    return res.status(400).json({ success: false, message: "available must be a boolean" });

  const book = Book.patch(Number(req.params.id), b);
  if (!book) return res.status(404).json({ success: false, message: "Book not found" });
  res.status(200).json({ success: true, data: book });
};

exports.deleteBook = (req, res) => {
  const ok = Book.remove(Number(req.params.id));
  if (!ok) return res.status(404).json({ success: false, message: "Book not found" });
  res.status(200).json({ success: true, message: "Book deleted" });
};

exports.searchBooks = (req, res) => {
  const title = req.query.title;
  const books = Book.searchByTitle(title);
  res.status(200).json({ success: true, data: books });
};

exports.getAvailableBooks = (req, res) => {
  const books = Book.getAvailable();
  res.status(200).json({ success: true, data: books });
};
