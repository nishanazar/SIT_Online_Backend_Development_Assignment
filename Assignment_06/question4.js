// Question 4: Array.isArray() and Arrow Functions

// Question 4: Array.isArray() and Arrow Functions

// Create three variables
let fruits = ["apple", "banana", "mango"];
let name = "Haseeb";
let age = 20;

// Use Array.isArray() to check each variable
console.log(Array.isArray(fruits));
console.log(Array.isArray(name));
console.log(Array.isArray(age));

// Arrow function named showArray
let showArray = (array) => {
    console.log(array);
};

// Call the arrow function with array
showArray(fruits);

// Another arrow function that accepts one value
let showValue = (value) => {
    console.log(value);
};

// Call the function
showValue("Hello World");