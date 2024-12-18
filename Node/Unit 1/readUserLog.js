function readLogs() {
  const fs = require("fs");
  const path = require("path");

  const logFilePath = path.join(__dirname, "user-activity.log");

  fs.readFile(logFilePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading log file: ", err);
    } else {
      console.log("User log activity:\n", data);
    }
  });
}

readLogs();
