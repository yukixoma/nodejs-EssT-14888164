const fs = require("fs");

fs.readFile("./readme.md", "utf-8", (err, file) => {
  if (err) {
    throw err;
  }
  console.log(file);
});

console.log("Reading file...");
