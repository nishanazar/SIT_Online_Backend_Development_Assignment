const books = require("../data/books");
let nextId = books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1;

exports.getAll = () => books;

exports.getById = (id) => books.find(b => b.id === id);

exports.create = (data) => {
  const book = { id: nextId++, ...data };
  books.push(book);
  return book;
};

exports.update = (id, data) => {
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return null;
  books[index] = { id, ...data };
  return books[index];
};

exports.patch = (id, data) => {
  const book = books.find(b => b.id === id);
  if (!book) return null;
  Object.assign(book, data);
  return book;
};

exports.remove = (id) => {
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return false;
  books.splice(index, 1);
  return true;
};

exports.searchByTitle = (titleQuery) => {
  if (!titleQuery) return [];
  return books.filter(b => b.title.toLowerCase().includes(titleQuery.toLowerCase()));
};

exports.getAvailable = () => {
  return books.filter(b => b.available === true);
};
