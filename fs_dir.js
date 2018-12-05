var fs = require('fs');

//make a dir

// fs.mkdirSync('stuff');


// remove a dir

// fs.rmdirSync('stuff');

fs.mkdir('stuff', function(){
  fs.readFile('readme.txt', 'utf8', function(err, data){
    fs.writeFile('./stuff/writeMe.txt', data);
  });
});

//deleting a file and then the directory asynchronously

// fs.unlink('/stuff/writeMe.txt', function(){
//   fs.rmdir('stuff');
// });


