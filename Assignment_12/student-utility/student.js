
function getIntroduction(name, course) {
  return `Hello! My name is ${name} and I am studying ${course}.`;
}

// Function 2: Percentage calculate karta hai
function calculatePercentage(obtainedMarks, totalMarks) {
  return (obtainedMarks / totalMarks) * 100;
}

// Dono functions ko export karo (CommonJS)
module.exports = {
  getIntroduction,
  calculatePercentage,
};