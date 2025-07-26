// Import entire module
const myModule = require("./myModule");
console.log(myModule.anything);

// Import specific parts
const { inc, dec, getCount } = require("./myModule");
inc();
inc();
inc();
console.log(`The count is ${getCount()}`);
dec();
console.log(`The count is ${getCount()}`);
