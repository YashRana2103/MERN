const express = require("express");
const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://yashrana21032006:RANAYASH2103@cluster0.rmzn8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");

    const app = express();
    app.use(express.json());

    app.listen(3000, () => {
      console.log("Server running on http://localhost:3000");
    });

    const userSchema = new mongoose.Schema({
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      age: { type: Number, default: 18 },
      createdAt: { type: Date, default: Date.now },
    });

    const User = mongoose.model("User", userSchema);

    // create user
    app.post("/users", async (req, res) => {
      try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    });

    // read all users
    app.get("/users", async (req, res) => {
      try {
        const users = await User.find();
        res.json(users);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    // read single user
    app.get("/users/:id", async (req, res) => {
      try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send("User not found");
        res.json(user);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    // update user by id
    app.put("/users/:id", async (req, res) => {
      try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!user) return res.status(404).send("User not found");
        res.json(user);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    });

    // delete user by id
    app.delete("/users/:id", async (req, res) => {
      try {
        const user = await User.findByIdAndDelete(req.params.id, req.body);
        if (!user) return res.status(404).send("User not found");
        res.send("User deleted successfully");
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    });
  })
  .catch((err) => console.error("Connection Error: ", err));
