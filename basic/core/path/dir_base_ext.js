var path = require('path');

var myPath = '/foo/bar/file.html';

// dirname: returns the directory of the path
// => '/foo/bar/'
console.log(path.dirname(myPath));

// basename: it returns the file
// => 'file.html'
console.log(path.basename(myPath));

// extname: it returns the extensions
// => '.html'
console.log(path.extname(myPath));