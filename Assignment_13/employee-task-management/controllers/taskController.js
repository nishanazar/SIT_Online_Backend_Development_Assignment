const Task = require("../models/taskModel");

const PRIORITIES = ["Low", "Medium", "High"];
const STATUSES = ["Pending", "In Progress", "Completed"];

const validate = (b) => {
  if (!b.title || !b.description || !b.assignedTo || !b.priority || !b.status || !b.dueDate)
    return "All fields are required";
  if (!PRIORITIES.includes(b.priority)) return "Invalid priority";
  if (!STATUSES.includes(b.status)) return "Invalid status";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(b.dueDate)) return "dueDate must be YYYY-MM-DD";
  return null;
};

exports.getAllTasks = (req, res) => {
  res.status(200).json({ success: true, data: Task.getAll() });
};

exports.getTaskById = (req, res) => {
  const task = Task.getById(Number(req.params.id));
  if (!task) return res.status(404).json({ success: false, message: "Task not found" });
  res.status(200).json({ success: true, data: task });
};

exports.createTask = (req, res) => {
  const error = validate(req.body);
  if (error) return res.status(400).json({ success: false, message: error });
  const task = Task.create(req.body);
  res.status(201).json({ success: true, data: task });
};

exports.updateTask = (req, res) => {
  const error = validate(req.body);
  if (error) return res.status(400).json({ success: false, message: error });
  const task = Task.update(Number(req.params.id), req.body);
  if (!task) return res.status(404).json({ success: false, message: "Task not found" });
  res.status(200).json({ success: true, data: task });
};

exports.patchTask = (req, res) => {
  const b = req.body;
  if (b.priority && !PRIORITIES.includes(b.priority))
    return res.status(400).json({ success: false, message: "Invalid priority" });
  if (b.status && !STATUSES.includes(b.status))
    return res.status(400).json({ success: false, message: "Invalid status" });
  if (b.dueDate && !/^\d{4}-\d{2}-\d{2}$/.test(b.dueDate))
    return res.status(400).json({ success: false, message: "dueDate must be YYYY-MM-DD" });

  const task = Task.patch(Number(req.params.id), b);
  if (!task) return res.status(404).json({ success: false, message: "Task not found" });
  res.status(200).json({ success: true, data: task });
};

exports.deleteTask = (req, res) => {
  const ok = Task.remove(Number(req.params.id));
  if (!ok) return res.status(404).json({ success: false, message: "Task not found" });
  res.status(200).json({ success: true, message: "Task deleted" });
};

exports.getByStatus = (req, res) => {
  const tasks = Task.getByStatus(req.params.status);
  res.status(200).json({ success: true, data: tasks });
};

exports.getByPriority = (req, res) => {
  const tasks = Task.getByPriority(req.params.priority);
  res.status(200).json({ success: true, data: tasks });
};

exports.getByEmployee = (req, res) => {
  const tasks = Task.getByEmployee(req.params.name);
  res.status(200).json({ success: true, data: tasks });
};

exports.getOverdue = (req, res) => {
  const tasks = Task.getOverdue();
  res.status(200).json({ success: true, data: tasks });
};

exports.getSummary = (req, res) => {
  const summary = Task.getSummary();
  res.status(200).json({ success: true, data: summary });
};
