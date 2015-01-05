var path = require('path');

// Fixes . and ..
console.log(path.normalize('/foo/bar/..'));

// Remove duplicate slashes
console.log(path.normalize('//foo/bar/abc//ciao'));

