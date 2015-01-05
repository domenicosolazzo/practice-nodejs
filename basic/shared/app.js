// Import the foo module
var foo = require('./foo');
console.log('something is: ', foo.something);

// Modify the property inside foo
foo.something = 111;

// Import bar module
// It should print 111 inside the module
var bar = require('./bar.js');