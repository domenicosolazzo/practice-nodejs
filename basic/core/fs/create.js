var fs = require('fs');

// Write a file
fs.writeFileSync('text.txt', 'Hello world');

// Read a file
var fileContent = fs.readFileSync('text.txt').toString();
console.log(fileContent);
