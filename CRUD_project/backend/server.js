require("dotenv").config();

// console.log(process.env.MONGO_URI);

const connectDB = require("./config/db");
const app = require("./app");

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
