var fs = require('fs');

fs.readFile('text.txt', {encoding: 'UTF-8'}, function(err, data){
    if(err) throw err;
    console.log(data);
});
console.log('end.');