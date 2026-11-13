# Library Management REST API

## Project Overview
A REST API built with Node.js, Express.js, and MVC architecture for managing library books (Question 2 Practice Project).

## Folder Structure
```
library-management/
├── server.js
├── app.js
├── package.json
├── env.txt
├── routes/
│   └── bookRoutes.js
├── controllers/
│   └── bookController.js
├── models/
│   └── bookModel.js
├── middleware/
│   ├── errorHandler.js
│   └── notFound.js
└── data/
    └── books.js
```

## Installation & Running
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
   (Server runs on port 4000 by default, configured via `env.txt`).

## API Endpoints
- `GET /api/books` - List all books
- `GET /api/books/:id` - Get one book
- `POST /api/books` - Create a book
- `PUT /api/books/:id` - Replace book details
- `PATCH /api/books/:id` - Update selected fields
- `DELETE /api/books/:id` - Delete book
- `GET /api/books/search?title=...` - Search books by title
- `GET /api/books/available` - List available books
