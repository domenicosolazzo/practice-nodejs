var os = require('os');

var gigaByte = 1 / Math.pow(1024,3);

console.log('Total Memory: ', os.totalmem(), 'GBs');
console.log('Free Memory: ', os.freemem(), 'GBs');
console.log('Percent consumed: ', (1 - os.freemem() / os.totalmem()));