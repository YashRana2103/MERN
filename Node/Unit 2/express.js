const express = require("express");
const app = express();

// Built-in middleware
app.use(express.json());

app.use((req, res, next) => {
  //   console.log(req.url);
  //   console.log("Custom middleware");

  const err = new Error("Page not found");
  err.status = 404;
  next(err); // Pass control to the next middleware
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
