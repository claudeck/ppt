var fs = require('fs');

var data = fs.readFileSync('text.txt', {encoding: 'UTF-8'});
console.log(data);
console.log('end.');