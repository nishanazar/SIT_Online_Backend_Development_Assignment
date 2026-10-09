# Assignment 08 - JavaScript Fundamentals & Array Methods

This repository contains a collection of JavaScript exercises and practice scripts developed as part of **Assignment 08** for backend development. The exercises focus on modern JavaScript array methods (`map`, `filter`, `find`, `reduce`), object creation, methods, property manipulation, and basic HTML integration.

---

## Project Structure

```text
Assignment_08/
├── index.html       # HTML entry point for browser execution
├── question1.js     # Order data processing using array methods
├── question2.js     # Student marks analysis using array methods
├── question3.js     # Employee records processing and filtering
├── question4.js     # Store inventory management (Map structure)
├── question5.js     # Student objects, methods, and property manipulation
└── README.md        # Project documentation
```

---

## Exercises Overview

### 1. `question1.js` - Order Processing
Demonstrates core array methods on numeric transaction/order amounts:
- **`find()`**: Locates the first order greater than `2000`.
- **`filter()`**: Filters orders greater than `1000`.
- **`reduce()`**: Calculates total sales/order value.

### 2. `question2.js` - Student Marks Analysis
Applies array transformations on student exam scores:
- **`map()`**: Increases all marks by `5`.
- **`filter()`**: Extracts passing marks (`>= 70`).
- **`find()`**: Finds the first mark exceeding `90`.
- **`reduce()`**: Computes the sum of original marks.

### 3. `question3.js` - Employee Records
Manages an array of employee objects (`name`, `department`, `salary`):
- **`filter()`**: Filters employees in the **IT** department.
- **`find()`**: Locates the first employee with a salary greater than `90,000`.
- **`map()`**: Extracts an array of all employee names.
- **`reduce()`**: Calculates the total payroll/salary expenditure.

### 4. `question4.js` - Store Inventory
- Dedicated to exploring JavaScript `Map` collections for store inventory management.

### 5. `question5.js` - Student Objects & Methods
Explores object literals, methods, and property operations:
- Creates student objects (`Ali`, `Sara`) with academic scores across multiple subjects.
- Implements a custom method (`calculateResult`) to compute total marks and percentages.
- Demonstrates **dot notation** and **bracket notation** for property access.
- Demonstrates property deletion using the `delete` operator.

---

## How to Run

### Running via Browser
Open `index.html` in your web browser and check the Developer Console (`F12` -> Console) to view script output.
