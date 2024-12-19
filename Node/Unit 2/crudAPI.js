const express = require("express");
const app = express();

// Built-in middleware to parse JSON requests
app.use(express.json());

let tasks = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Learn Express.js", completed: false },
];

// GET all tasks
app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

// POST (Create) a new task
app.post("/tasks", (req, res) => {
  const { title, completed } = req.body; // Extract data from request body
  if (!title) {
    return res.status(400).json({ error: "Title is required!" });
  }
  const newTask = {
    id: tasks.length + 1,
    title,
    completed: completed || false,
  };
  tasks.push(newTask); // Add to the list
  res.status(201).json(newTask); // Respond with the created task
});

// PUT (Update) a task
app.put("/tasks/:id", (req, res) => {
  const { id } = req.params; // Extract the task ID from the URL
  const { title, completed } = req.body; // Extract data from the request body

  const task = tasks.find((t) => t.id === parseInt(id));
  if (!task) {
    return res.status(404).json({ error: "Task not found!" });
  }

  // Update the task's properties
  if (title) task.title = title;
  if (completed !== undefined) task.completed = completed;

  res.status(200).json(task); // Respond with the updated task
});

// DELETE a task
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params; // Extract the task ID from the URL

  const index = tasks.findIndex((t) => t.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: "Task not found!" });
  }

  tasks.splice(index, 1); // Remove the task
  res.status(200).json({ message: "Task deleted successfully!" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
