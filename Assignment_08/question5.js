
 // 1. Create first student object
const student1 = {
    name: "Ali",
    class: "10th",
    chemistry: 85,
    mathematics: 90,
    urdu: 80,
    english: 75,

    // Method to calculate total marks and percentage
    calculateResult: function() {
        let total = this.chemistry + this.mathematics +
                    this.urdu + this.english;

        let percentage = (total / 400) * 100;

        console.log("Total Marks:", total);
        console.log(this.name + "'s Percentage:", percentage + "%");
    }
};

// 2. Display student's name and class using dot notation
console.log("Student Name:", student1.name);
console.log("Class:", student1.class);

// 3. Access a property using bracket notation
console.log("Chemistry Marks:", student1["chemistry"]);

// 4. Call the method
student1.calculateResult();


// 5. Create second student object with the same type of method
const student2 = {
    name: "Sara",
    class: "10th",
    chemistry: 90,
    mathematics: 95,
    urdu: 85,
    english: 80,

    calculateResult: function() {
        let total = this.chemistry + this.mathematics +
                    this.urdu + this.english;

        let percentage = (total / 400) * 100;

        console.log("Total Marks:", total);
        console.log(this.name + "'s Percentage:", percentage + "%");
    }
};

// Call second student's method
student2.calculateResult();


// 6. Remove one property from the first student
delete student1.urdu;

// Display final object
console.log("Final Student Object:", student1);