const fs = require("fs");

let stream = fs.createReadStream("./chat-logs/george-ben-chat.log", "utf-8");
let data = "";

stream.once("data", (chunk) => {
  console.log("Stream reading started");
  console.log("======================");
  console.log(chunk);
});

stream.on("data", (chunk) => {
  console.log(`Chunk: ${chunk.length}`);
  data += chunk;
});

stream.on("end", () => {
  console.log("======================");
  console.log("Stream reading ended");
  console.log(`Data: ${data.length}`);
  console.log(data);
});
