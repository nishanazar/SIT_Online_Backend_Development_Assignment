# Node.js Fundamentals - Assignment 12

Four small Node.js projects built with CommonJS and built-in modules only (no Express, no database).

## Requirements

- Node.js and npm installed
- Check with: `node -v` and `npm -v`

## Projects

### Q1 - student-utility
Shows a student's introduction, percentage and Node.js version.
```bash
cd student-utility
npm start
```

### Q2 - computer-notes-manager
Shows computer info and manages a notes file using `os`, `path` and `fs`.
```bash
cd computer-notes-manager
node app.js
```

### Q3 - campus-server
Simple HTTP server on port 3000.
```bash
cd campus-server
node server.js
```
Routes: `/` | `/about` | `/courses` | `/students` | any other URL returns 404 "Page Not Found".
Stop the server with `Ctrl + C`.

### Q4 - registration-events-streams
Part A uses EventEmitter, Part B uses file streams and pipe.
```bash
cd registration-events-streams
node events.js
node streams.js
```

## Notes

- `node_modules` and `.env` are not uploaded (see `.gitignore`).
- Each question has its own folder with all files needed to run it.