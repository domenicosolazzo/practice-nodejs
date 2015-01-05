// Import the foo module
var foo = require('./foo');

var obj1 = foo();
console.log('obj1: ', obj1.something);

var obj2 = foo();
console.log('obj2: ', obj2.something);
console.log('Changing obj2...');
obj2.something = 'ciao';

console.log('obj1:', obj1.something);
console.log('obj2:', obj2.something);