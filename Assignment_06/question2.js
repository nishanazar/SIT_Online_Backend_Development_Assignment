// Question 2: Adding and Removing Array Elements

let students_names = ["haseeb", "hashir", "ali", "ahmed", "sultan"];

// push() - add student at the end
students_names.push("ibrahim");
console.log(students_names);

// pop() - remove last student and display removed value
let removed_last = students_names.pop();
console.log(removed_last);
console.log(students_names);

// unshift() - add student at the beginning
students_names.unshift("aiza");
console.log(students_names);

// shift() - remove first student and display removed value
let removed_first = students_names.shift();
console.log(removed_first);
console.log(students_names);

// length - final number of students
console.log(students_names.length);