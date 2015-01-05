var str = "a new string";

// A new buffer from a string
var buf = new Buffer(str, 'UTF-8');

// A string from a buffer
var str2 = buf.toString('UTF-8')
console.log(str2);