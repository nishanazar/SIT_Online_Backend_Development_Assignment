// Question 3: concat(), slice(), splice() and delete

// Create two arrays
let fruits = ["apple", "banana", "mango", "orange"];
let more_fruits = ["grapes", "cherry"];

// 1. concat() - combine two arrays
let all_fruits = fruits.concat(more_fruits);
console.log(all_fruits);

// 2. slice() - create a new array from selected portion
let selected_fruits = fruits.slice(1, 3);
console.log(selected_fruits);

// 3. splice() - remove at least one element
fruits.splice(1, 1);
console.log(fruits);

// 4. splice() - add an element at a specific position
fruits.splice(1, 0, "banana");
console.log(fruits);

// 5. delete - delete one element using its index
delete fruits[2];

// Display array after delete
console.log(fruits);

// Display length after delete
console.log(fruits.length);

// Observe deleted position
console.log(fruits[2]);