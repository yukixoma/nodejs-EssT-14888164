const fs = require("fs");

fs.readdir("./", (err, files) => {
  if (err) {
    throw err;
  } else {
    console.log(files);
  }
});

console.log("Reading files....");
