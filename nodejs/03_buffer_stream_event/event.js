var fs = require('fs');

var rs = fs.createReadStream(__filename);
rs.on('data', function(data){
  console.log(data.toString());
});
rs.on('end', function(){
  console.log('end');
});