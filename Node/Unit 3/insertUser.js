const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://yashrana21032006:RANAYASH2103@cluster0.rmzn8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");

    const userSchema = new mongoose.Schema({
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      age: { type: Number, default: 18 },
      createdAt: { type: Date, default: Date.now },
    });

    const User = mongoose.model("User", userSchema);

    const newUser = new User({
      name: "Lolita",
      email: "darling@example.com",
    });

    newUser
      .save()
      .then(() => console.log("User saved!"))
      .catch((err) => console.log("error saving user:", err));

    module.exports = User;
  })
  .catch((err) => console.error("Error: ", err));
