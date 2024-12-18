const { log, error } = require("console");
const fs = require("fs");

console.log("Start Asynchronous");

fs.readFile("temp.txt", "utf-8", (err, file1) => {
  if (err) return console.error(err);
  console.log(file1);
});

fs.readFile("tobe_learned.txt", "utf-8", (err, file2) => {
  if (err) return console.error(err);
  console.log(file2);
});

console.log("End Asynchronous");
