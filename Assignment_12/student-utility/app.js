
const { getIntroduction, calculatePercentage } = require("./student");

// Sample data
const name = "Ali";
const course = "Web Development";
const obtainedMarks = 425;
const totalMarks = 500;

// Functions call karo
const introduction = getIntroduction(name, course);
const percentage = calculatePercentage(obtainedMarks, totalMarks);

// Output dikhao
console.log("===== Student Utility =====");
console.log(introduction);
console.log("Name:", name);
console.log("Course:", course);
console.log("Percentage:", percentage + "%");
console.log("Node.js Version:", process.version);