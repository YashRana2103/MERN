const fs = require("fs");
const path = require("path");

function copyLargeFile(sourceFile, destinationFile) {
  const readStream = fs.createReadStream(sourceFile);
  const writeStream = fs.createWriteStream(destinationFile);

  readStream.pipe(writeStream);

  readStream.on("data", (chunk) => {
    console.log("processing chunk of size: : ", chunk);
  });

  readStream.on("end", () => {
    console.log("File copying completed.");
  });

  readStream.on("error", (err) => {
    console.log("Error while reading file: ", err);
  });

  writeStream.on("error", (err) => {
    console.log("Error while writing file: ", err);
  });
}

const sourceFile = path.join(__dirname, "largeFile.txt");
const destinationFile = path.join(__dirname, "copiedLargeFile.txt");

copyLargeFile(sourceFile, destinationFile);
