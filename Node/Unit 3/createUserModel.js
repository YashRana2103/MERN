const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://yashrana21032006:RANAYASH2103@cluster0.rmzn8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoURI)
  .then(() => {
    const userSchema = new mongoose.Schema({
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      age: { type: Number, default: 18 },
      createdAt: { type: Date, default: Date.now },
    });

    const User = mongoose.model("User", userSchema);

    module.exports = User;
  })
  .catch((err) => console.error("Connection Error: ", err));
