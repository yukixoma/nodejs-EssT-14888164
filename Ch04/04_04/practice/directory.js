const fs = require("fs");

console.log("Enter new folder name:");
process.stdin.on("data", (data) => {
  let folderName = data.toString().trim();
  if (fs.existsSync(folderName)) {
    console.log("Folder existed!");
    process.exit();
  } else {
    fs.mkdir(folderName, (err) => {
      if (err) {
        console.log(`ERROR: ${err}`);
      } else {
        console.log("Folder created!");
      }
      process.exit();
    });
  }
});
