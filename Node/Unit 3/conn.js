const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://yashrana21032006:RANAYASH2103@cluster0.rmzn8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connection to MongoDB Atlas!"))
  .catch((err) => console.error("Connection Error: ", err));
