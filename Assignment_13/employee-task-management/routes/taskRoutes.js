const express = require("express");
const router = express.Router();
const c = require("../controllers/taskController");

// ⚠️ Specific routes PEHLE, /:id BAAD mein

router.get("/summary", c.getSummary);
router.get("/overdue", c.getOverdue);
router.get("/employee/:name", c.getByEmployee);
router.get("/status/:status", c.getByStatus);
router.get("/priority/:priority", c.getByPriority);

router.get("/", c.getAllTasks);
router.get("/:id", c.getTaskById);
router.post("/", c.createTask);
router.put("/:id", c.updateTask);
router.patch("/:id", c.patchTask);
router.delete("/:id", c.deleteTask);

module.exports = router;
