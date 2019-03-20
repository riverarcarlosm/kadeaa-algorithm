const number = process.argv.slice(2);
const kadeaa = require("./app/kadeaa");

console.log(kadeaa.init(parseInt(number)));
