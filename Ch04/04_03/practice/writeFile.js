const fs = require("fs");

let md = `
    Javascript
    ===================

    * Template String
    * Node File System
    * Writefile CLIs

`;

fs.writeFile("js.md", md.trim(), (err) => {
  if (err) {
    throw err;
  } else {
    fs.appendFile("js.md", "\n\n ### NodeJS Everyone!", (err) => {
      if (err) {
        throw err;
      } else {
        console.log("Markdown appended!");
      }
    });
    console.log("Markdown created!");
  }
});
