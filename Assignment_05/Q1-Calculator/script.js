// Function for Addition
function addNumbers() {
    // 1. Get values from the input fields
    let firstInput = document.getElementById("num1").value;
    let secondInput = document.getElementById("num2").value;
    
    // 2. Convert string values to actual numbers
    let number1 = Number(firstInput);
    let number2 = Number(secondInput);
    
    // 3. Perform addition
    let sum = number1 + number2;
    
    // 4. Display the result on the webpage
    document.getElementById("result").innerText = sum;
}

// Function for Subtraction
function subtractNumbers() {
    // 1. Get values from the input fields
    let firstInput = document.getElementById("num1").value;
    let secondInput = document.getElementById("num2").value;
    
    // 2. Convert string values to actual numbers
    let number1 = Number(firstInput);
    let number2 = Number(secondInput);
    
    // 3. Perform subtraction
    let difference = number1 - number2;
    
    // 4. Display the result on the webpage
    document.getElementById("result").innerText = difference;
}

// Function for Multiplication
function multiplyNumbers() {
    // 1. Get values from the input fields
    let firstInput = document.getElementById("num1").value;
    let secondInput = document.getElementById("num2").value;
    
    // 2. Convert string values to actual numbers
    let number1 = Number(firstInput);
    let number2 = Number(secondInput);
    
    // 3. Perform multiplication
    let product = number1 * number2;
    
    // 4. Display the result on the webpage
    document.getElementById("result").innerText = product;
}

// Function for Division
function divideNumbers() {
    // 1. Get values from the input fields
    let firstInput = document.getElementById("num1").value;
    let secondInput = document.getElementById("num2").value;
    
    // 2. Convert string values to actual numbers
    let number1 = Number(firstInput);
    let number2 = Number(secondInput);
    
    // 3. If second number is 0, show error message. Otherwise, divide.
    if (number2 === 0) {
        document.getElementById("result").innerText = "Cannot divide by zero";
    } else {
        let quotient = number1 / number2;
        document.getElementById("result").innerText = quotient;
    }
}
