// Question 3 — Login Validation

let correctUsername = "admin";
let correctPassword = "password123";

// Case 1: Correct login
let username = "admin";
let password = "password123";

if (username === correctUsername && password === correctPassword) {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}

// Case 2: Incorrect login
username = "admin";
password = "wrongPassword";

if (username === correctUsername && password === correctPassword) {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}
