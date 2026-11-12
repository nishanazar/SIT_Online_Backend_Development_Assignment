
const os = require("os");
const path = require("path");
const fs = require("fs");

// ---------- 1. Computer Information (os module) ----------
console.log("===== Computer Information =====");
console.log("Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory:", (os.totalmem() / 1024 ** 3).toFixed(2), "GB");
console.log("Free Memory:", (os.freemem() / 1024 ** 3).toFixed(2), "GB");
console.log("Home Directory:", os.homedir());

// ---------- 2. data folder banao (agar pehle se nahi hai) ----------
const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("\ndata folder created.");
} else {
  console.log("\ndata folder already exists.");
}

// ---------- 3. File ka path banao (path module) ----------
const notesPath = path.join(dataFolder, "student-notes.txt");
console.log("\n===== Path Information =====");
console.log("Full Path:", notesPath);
console.log("File Name:", path.basename(notesPath));
console.log("Extension:", path.extname(notesPath));

// ---------- 4. File banao aur 3 lines likho ----------
const notes =
  "Node.js runs JavaScript outside the browser.\n" +
  "npm is used to install and manage packages.\n" +
  "Core modules like os, path and fs come built-in with Node.js.";

fs.writeFileSync(notesPath, notes);
console.log("\nNotes file created.");

// ---------- 5. File read karo ----------
console.log("\n===== File Contents =====");
console.log(fs.readFileSync(notesPath, "utf8"));

// ---------- 6. Ek line append karo aur dobara read karo ----------
fs.appendFileSync(notesPath, "\nThe fs module helps us read and write files.");

console.log("\n===== Updated File Contents =====");
console.log(fs.readFileSync(notesPath, "utf8"));

// ---------- 7. File ka naam badlo (rename) ----------
const newPath = path.join(dataFolder, "class-notes.txt");
fs.renameSync(notesPath, newPath);
console.log("\nFile renamed to:", path.basename(newPath));

// ---------- 8. Temporary file banao aur sab se last mein delete karo ----------
const tempPath = path.join(dataFolder, "temp.txt");
fs.writeFileSync(tempPath, "This is a temporary file.");
console.log("Temporary file created.");

fs.unlinkSync(tempPath);
console.log("Temporary file removed.");