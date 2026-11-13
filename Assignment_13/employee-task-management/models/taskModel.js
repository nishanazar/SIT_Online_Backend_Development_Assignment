const tasks = require("../data/tasks");
let nextId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;

exports.getAll = () => tasks;
exports.getById = (id) => tasks.find(t => t.id === id);

exports.create = (data) => {
  const task = { id: nextId++, ...data };
  tasks.push(task);
  return task;
};

exports.update = (id, data) => {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return null;
  tasks[index] = { id, ...data };
  return tasks[index];
};

exports.patch = (id, data) => {
  const task = tasks.find(t => t.id === id);
  if (!task) return null;
  Object.assign(task, data);
  return task;
};

exports.remove = (id) => {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};

exports.getByStatus = (status) => {
  return tasks.filter(t => t.status.toLowerCase() === status.toLowerCase());
};

exports.getByPriority = (priority) => {
  return tasks.filter(t => t.priority.toLowerCase() === priority.toLowerCase());
};

exports.getByEmployee = (name) => {
  return tasks.filter(t => t.assignedTo.toLowerCase() === name.toLowerCase());
};

exports.getOverdue = () => {
  const today = new Date().toISOString().split("T")[0];
  return tasks.filter(t => t.dueDate < today && t.status !== "Completed");
};

exports.getSummary = () => {
  const total = tasks.length;
  const pending = tasks.filter(t => t.status === "Pending").length;
  const inProgress = tasks.filter(t => t.status === "In Progress").length;
  const completed = tasks.filter(t => t.status === "Completed").length;
  return { total, pending, inProgress, completed };
};
