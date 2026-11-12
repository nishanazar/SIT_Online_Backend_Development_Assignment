// events.js

// EventEmitter class import karo
const EventEmitter = require("events");

// Registration system ke liye emitter object banao
const registrationSystem = new EventEmitter();

// Listener: jab "studentRegistered" event aaye to yeh chalega
registrationSystem.on("studentRegistered", (student) => {
  console.log(
    `Registration Confirmed: ${student.name} (ID: ${student.id}) has been registered.`
  );

  // Confirmation ke baad 3 second baad reminder dikhao
  setTimeout(() => {
    console.log(`Reminder: ${student.name}, please submit your documents.`);
  }, 3000);
});

// Function: student ID aur name leta hai aur event emit karta hai
function registerStudent(id, name) {
  registrationSystem.emit("studentRegistered", { id, name });
}

// Kam az kam 2 students register karo
registerStudent(101, "Ali");
registerStudent(102, "Sara");