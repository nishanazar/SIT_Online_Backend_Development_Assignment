
// TASK 1: Function with NO parameters

function greet() {
    console.log("Welcome to JavaScript!");
}


// -----------------------------------
// TASK 2: Function with ONE parameter
function greetUser(name) {
    console.log(`wellcome, ${name}!`)
}


// ----------------------------------------------------------
// TASK 3: Function with TWO parameters that RETURNS a value

function addNumbers(num1, num2) {
    return num1 + num2;
}

// ==========================================
// TASK 4: Calling all functions and logging their results
// ==========================================

greet();
greetUser("Ali");
let result = addNumbers(5, 10);
console.log(result);
