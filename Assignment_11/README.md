# JavaScript Basics – Assignment 11: Fetch API, HTTP Methods & API-Based Projects

This repository contains solutions for **Assignment 11**, focusing on asynchronous JavaScript, the **Fetch API**, HTTP methods (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`), status codes, and error handling.

---

## 📁 Project Structure

| Question | Description | Files | API Endpoint |
| :--- | :--- | :--- | :--- |
| **Q1** | Fetch API CRUD Practice Page | `Q1_crud.html`<br>`Q1_crud.css`<br>`Q1_crud.js` | `https://jsonplaceholder.typicode.com/posts` |
| **Q2** | Product Explorer (`.then()` chaining) | `Q2_product.html`<br>`Q2_product.css`<br>`Q2_product.js` | `https://dummyjson.com/products` |
| **Q3** | Recipe Finder (`async/await`) | `Q3_recipes.html`<br>`Q3_recipes.css`<br>`Q3_recipes.js` | `https://dummyjson.com/recipes` |
| **Q4** | API Request Practice (CRUD Helper) | `Q4_postRequests.html`<br>`Q4_postRequests.css`<br>`Q4_postRequests.js` | `https://jsonplaceholder.typicode.com/posts` |

---

## 🚀 Overview of Questions

### Question 1: Fetch API CRUD Practice
- **Features:** Displays the first 6 posts in cards. Includes a form to add new posts (`POST`) and card controls to update fully (`PUT`), update partially (`PATCH`), or delete (`DELETE`).
- **Key Concepts:** Handling `response.ok`, status codes, dynamic DOM updates, and loading/error feedback.

### Question 2: Product Explorer
- **Features:** Fetches and displays at least 6 online store products as cards (Title, Brand, Price, Thumbnail).
- **Key Concepts:** Promise chaining (`.then()`, `.catch()`), response parsing, and error handling.

### Question 3: Recipe Finder
- **Features:** Browsing page for meals and recipes showing name, cuisine, image, and prep time. Clicking a recipe reveals its ingredients list.
- **Key Concepts:** `async/await`, `try/catch`, `response.ok`, and interactive UI states.

### Question 4: API Request Practice
- **Features:** Demonstrates programmatic submission (`POST`), full replacement (`PUT`), partial update (`PATCH`), and deletion (`DELETE`) on `/posts/1`.
- **Key Concepts:** Reusable fetch helper function, `JSON.stringify()`, and appropriate `Content-Type` headers.

---

## 🛠️ How to Run
1. Clone or download this repository.
2. Open any HTML file (e.g., `Q1_crud.html`, `Q2_product.html`, `Q3_recipes.html`, `Q4_postRequests.html`) directly in your web browser or run using a local development server (like VS Code Live Server).
