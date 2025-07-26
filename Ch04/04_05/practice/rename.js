const fs = require("fs");
const path = require("path");

let fileName = "config.js";
let newFileName = "project-config.js";

function rename(fileName, newFileName) {
  fs.rename(
    path.join(__dirname, "lib", fileName),
    path.join(__dirname, "lib", newFileName),
    (err) => {
      if (err) {
        throw err;
      } else {
        console.log(`File ${fileName} is renamed to ${newFileName}.`);
      }
    }
  );
}

function moveFile(fileName, newFileName) {
  fs.rename(
    path.join(__dirname, "lib", fileName),
    path.join(__dirname, newFileName),
    (err) => {
      if (err) {
        throw err;
      } else {
        console.log(`File ${fileName} is moved.`);
      }
    }
  );
}

function deleteFile(fileName) {
  fs.unlink(path.join(__dirname, fileName), (err) => {
    if (err) {
      throw err;
    } else {
      console.log(`File ${fileName} is deleted.`);
    }
  });
}

rename(fileName, newFileName);
moveFile(newFileName, newFileName);
deleteFile(newFileName);