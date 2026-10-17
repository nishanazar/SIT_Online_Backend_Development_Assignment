
import getTotalMarks, { getFullName } from "./studentTools.js";

const fullName = getFullName("Sara", "Ahmed");

const totalMarks = getTotalMarks(85, 90, 78, 92);

console.log("Student Name: " + fullName);
console.log("Total Marks: " + totalMarks);
