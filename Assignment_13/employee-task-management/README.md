# Employee Task Management REST API

## Project Overview
A REST API built with Node.js, Express.js, and MVC architecture for managing employee tasks.

## Folder Structure
```
employee-task-management/
├── server.js
├── app.js
├── package.json
├── .env
├── routes/
│   └── taskRoutes.js
├── controllers/
│   └── taskController.js
├── models/
│   └── taskModel.js
├── middleware/
│   ├── errorHandler.js
│   └── notFound.js
└── data/
    └── tasks.js
```

## Installation & Running
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
   (Server runs on port 3000 by default, configured via `.env`).

## API Endpoints
- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get task by ID
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update complete task
- `PATCH /api/tasks/:id` - Update selected fields
- `DELETE /api/tasks/:id` - Delete task
- `GET /api/tasks/summary` - Get task counts summary
- `GET /api/tasks/overdue` - Get overdue pending tasks
- `GET /api/tasks/employee/:name` - Get tasks assigned to employee
- `GET /api/tasks/status/:status` - Filter tasks by status
- `GET /api/tasks/priority/:priority` - Filter tasks by priority
