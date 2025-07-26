const fs = require("fs");
const path = require("path");


// Windows 10 does not fully support this 
fs.renameSync(
  path.join(__dirname, "test"),
  path.join(__dirname, "accounts", "logs")
);
