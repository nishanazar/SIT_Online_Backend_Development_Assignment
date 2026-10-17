
const book = ["BK-104", "JavaScript for Beginners", "Programming", 1200];

// Extract book details
const [bookId, bookTitle, , price] = book;

// Shorter record
const newBook = ["BK-105", "Learning ES6"];

// Default category
const [newBookId, newBookTitle, category = "General"] = newBook;

// Display details
console.log("Book ID: " + bookId + ", Title: " + bookTitle + ", Price: " + price);

console.log("Book ID: " + newBookId + ", Title: " + newBookTitle + ", Category: " + category);
