
import courses from "./courses.js";
import { formatCourse } from "./courseTools.js";

// 1. Extract course name and fee
const { courseName, fee } = courses[0];

console.log("Selected Course: " + courseName);
console.log("Course Fee: Rs. " + fee);

// 2. Create a new course list without changing original list
const newCourse = {
    courseName: "React Development",
    instructor: "Usman Ali",
    duration: "6 Weeks",
    fee: 15000
};

const updatedCourses = [...courses, newCourse];

// 3. Update fee of one course without changing original object
const revisedCourse = {
    ...courses[0],
    fee: 14000
};

// 4. Display original and updated course data
console.log("Original Courses:", courses);
console.log("Courses With New Course:", updatedCourses);

console.log("Original First Course:", courses[0]);
console.log("Course With Revised Fee:", revisedCourse);

// 5. Display summaries of all courses
console.log("All Course Summaries:");

updatedCourses.forEach(function(course) {
    console.log(formatCourse(course));
});
