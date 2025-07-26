const path = require("path");
const util = require("util");
const v8 = require("v8");

console.log(path.basename(__dirname));

const uploadDir = path.join(__dirname, "www", "files", "uploads");
console.log(uploadDir);

util.log(__dirname);
util.log(v8.getHeapStatistics());
