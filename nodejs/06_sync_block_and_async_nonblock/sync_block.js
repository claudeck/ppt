var fs = require('fs');
var path = require('path');

var files = fs.readdirSync('.');
files.forEach(function(file){
  var stat = fs.statSync(file);
  if(stat.isFile()){
    var str = fs.readFileSync(file, {encoding: 'utf8'});
    console.log(file + ":" + str.length);
  }
});