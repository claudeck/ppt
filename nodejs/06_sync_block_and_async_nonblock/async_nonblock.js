var fs = require('fs');
var path = require('path');

fs.readdir('.', function(err, files){
  if(err) return console.log(err);
  var processed = 0;
  files.forEach(function(file){
    fs.stat(file, function(err, stat){
      if(stat.isFile()){
        fs.readFile(file, {encoding: 'utf8'}, function(err, str){
          console.log(file + ":" + str.length);
        });
      }
    });
  });

});
