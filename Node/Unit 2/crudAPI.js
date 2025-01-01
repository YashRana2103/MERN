const express = require("express");
const app = express();

app.use(express.json()); // Parse JSON data

let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

// GET all users
app.get("/users", (req, res, next) => {
  if (!users) {
    const error = new Error("Users not found");
    next(error);
  }
  res.json(users);
});

// GET a single user
app.get("/users/:id", (req, res, next) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    const error = new Error("User not found");
    return next(error);
  }
  res.json(user);
});

// POST a new user
app.post("/users", (req, res) => {
  const user = { id: users.length + 1, name: req.body.name };
  users.push(user);
  res.status(201).json(user);
});

// PUT (update) a user
app.put("/users/:id", (req, res, next) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    const error = new Error("User not found");
    return next(error);
  }
  user.name = req.body.name;
  res.json(user);
});

// DELETE a user
app.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id !== parseInt(req.params.id));
  res.send("User deleted!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
