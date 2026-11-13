const express = require("express");
const router = express.Router();
const c = require("../controllers/bookController");

// ⚠️ Specific routes PEHLE, /:id BAAD mein
router.get("/search", c.searchBooks);
router.get("/available", c.getAvailableBooks);

router.get("/", c.getAllBooks);
router.get("/:id", c.getBookById);
router.post("/", c.createBook);
router.put("/:id", c.updateBook);
router.patch("/:id", c.patchBook);
router.delete("/:id", c.deleteBook);

module.exports = router;
