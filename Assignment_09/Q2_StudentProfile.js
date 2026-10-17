
const student = {
    name: "Sara Ahmed",
    age: 19,
    department: "Software Engineering",
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
};

// Extract name and age
const { name, age } = student;

// Rename department to program
const { department: program } = student;

// Extract city and country
const { address: { city, country } } = student;

// Default phone value
const { phone = "Not provided" } = student;

// Display profile summary
console.log("Name: " + name + ", Program: " + program + ", City: " + city + ", Phone: " + phone);
