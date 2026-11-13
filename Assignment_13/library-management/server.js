require("dotenv").config({ path: "./env.txt" });
const app = require("./app");
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Library Service running on port ${PORT}`));
