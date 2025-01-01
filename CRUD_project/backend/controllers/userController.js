const User = require("../models/userModel");

// get all users
const getUsers = async (req, res) => {
  try {
    console.log("Fetching all users...");
    const users = await User.find();
    res.status(200).json(users);
    console.log("Users Fetched");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// get a single user by ID
const getUserById = async (req, res) => {
  try {
    console.log("Fetching user...");
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
    console.log("User Fetched");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// create a new user
const createUser = async (req, res) => {
  try {
    if (!req.body.name || !req.body.email) {
      return res.status(400).send("Name and email are required");
    }

    console.log("Checking if user exists...");
    const { name, email, age } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("User with this email already exists");
      return res.status(400).send("User with this email already exists");
    }

    console.log("Creating user...");
    let newUser = {};
    if (age === "" || age === null || age === undefined) {
      newUser = await User.create({ name, email });
    } else {
      newUser = await User.create({ name, email, age });
    }
    res.status(201).json(newUser);
    console.log("User created!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// update an existing user
const updateUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    console.log("Updating user...");
    let updatedUser = {};
    if (age === "" || age === null || age === undefined) {
      updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { name, email },
        { new: true, runValidators: true }
      );
    } else {
      updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { name, email, age },
        { new: true, runValidators: true }
      );
    }
    if (!updatedUser) return res.status(404).json({ error: "User not found" });
    res.status(200).json(updatedUser);
    console.log("User Updated!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// delete a user
const deleteUser = async (req, res) => {
  try {
    console.log("Deleting user...");
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deleteUser) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
    console.log("User Deleted!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
