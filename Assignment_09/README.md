# JavaScript Basics - Assignment 09
> **ES6+ Features, Destructuring, Spread Operator & Modules**

- `Assignment_09/`: Contains the files for Assignment 09 (JavaScript ES6+ Features, Destructuring, Spread Operator & Modules).

---

## 📄 Assignment PDF
- **Assignment Document:** [JavaScript_Assignment_09.pdf](./JavaScript_Assignment_09_ES6_Modules_Destructuring_Spread.pdf)

---

## 🎯 Topics Covered
- **Array Destructuring** (Skipping elements, default values)
- **Object Destructuring** (Renaming properties, nested extraction, defaults)
- **Spread Operator (`...`)** (Copying, merging, and immutable updates)
- **ES6 Modules** (Named & default exports, module imports)

---

## 📁 Project Structure

```text
Assignment_09/
├── JavaScript_Assignment_09_ES6_Modules_Destructuring_Spread.pdf
├── README.md
├── Q1_LibraryRecord.js
├── Q2_StudentProfile.js
├── Q3_ClassManagement.js
├── Q4_StudentToolkit/
│   ├── index.html
│   ├── studentTools.js
│   └── main.js
└── Q5_CourseRegistration/
    ├── index.html
    ├── courses.js
    ├── courseTools.js
    └── main.js
```

---

## 📌 Questions Summary

| Question | File / Folder | Core Concept |
| :--- | :--- | :--- |
| **Q1: Library Record** | `Q1_LibraryRecord.js` | Array destructuring, ignoring items, default values |
| **Q2: Student Profile** | `Q2_StudentProfile.js` | Object destructuring, renaming (`department: program`), nested address, default phone |
| **Q3: Class Management** | `Q3_ClassManagement.js` | Spread operator for array merging, independent copying, and immutable object updates |
| **Q4: Student Toolkit** | `Q4_StudentToolkit/` | ES6 modules with named (`getFullName`) & default (`getTotalMarks`) exports |
| **Q5: Course Registration**| `Q5_CourseRegistration/` | Mini-project combining multi-file modules, destructuring, and spread operator |

---

## 🚀 How to Run

### Questions 1 – 3 (Node.js)
```bash
node Q1_LibraryRecord.js
node Q2_StudentProfile.js
node Q3_ClassManagement.js
```

### Questions 4 & 5 (Live Server)
Due to ES6 module CORS security restrictions:
1. Open the project in **VS Code**.
2. Right-click `index.html` inside `Q4_StudentToolkit/` or `Q5_CourseRegistration/` and select **"Open with Live Server"**.
3. Open Developer Console (`F12` -> **Console**) to view the output.
