
const marks = [45, 78, 92, 61, 88, 54, 73, 95];

const increasedMarks = marks.map(mark => mark + 5);
console.log("Marks After Adding 5:", increasedMarks);


const passedStudents = marks.filter(mark => mark >= 70);
console.log("Marks 70 or Above:", passedStudents);


const firstHighMark = marks.find(mark => mark > 90);
console.log("First Mark Greater Than 90:", firstHighMark);


const totalMarks = marks.reduce((total, mark) => total + mark, 0);
console.log("Total Original Marks:", totalMarks);





  
