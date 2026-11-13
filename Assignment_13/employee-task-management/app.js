const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(express.json());              // JSON body parse karne ke liye
app.use("/api/tasks", taskRoutes);
app.use(notFound);                    // routes ke BAAD
app.use(errorHandler);                // sabse last

module.exports = app;