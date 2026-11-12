const http = require("http");

const PORT = 3000;

// Server banao. Har request par yeh function chalta hai.
const server = http.createServer((req, res) => {
  // req.url batata hai ke visitor ne kaunsa URL khola
  const url = req.url;


// ---------- Route 1: Home ----------
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Bright Future College!");

  // ---------- Route 2: About ----------
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(
      "Bright Future College was founded in 2005. " +
        "We provide quality technical education to students."
    );

  // ---------- Route 3: Courses ----------
  } else if (url === "/courses") {
    const courses = ["Web Development", "Data Science", "Graphic Designing"];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(courses));

  // ---------- Route 4: Students ----------
  } else if (url === "/students") {
    const students = [
      { id: 1, name: "Ali", course: "Web Development" },
      { id: 2, name: "Sara", course: "Data Science" },
      { id: 3, name: "Ahmed", course: "Graphic Designing" },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(students));

  // ---------- Unknown URL: 404 ----------
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

// Server start karo
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});