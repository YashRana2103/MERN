const { log } = require("console");
const fs = require("fs");
const path = require("path");

function logActivity(username, activity) {
  const logFilePath = path.join(__dirname, "user-activity.log");
  const logMessage = `${new Date().toISOString()} - ${username} - ${activity}\n`;

  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.log("Error writing to log file: ", err);
    } else {
      console.log("Log entry added.");
    }
  });
}

logActivity("yash", "logged in");
logActivity("yash", "Viewed dashboard");
