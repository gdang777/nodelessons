const fs = require('fs');

// synchonous way of calling the methods

// const readMe = fs.readFileSync('readme.txt', 'utf8');
// console.log(readMe);

// fs.writeFileSync('writeMe.txt', readMe);

// Asynchronous way of calling the function

fs.readFile('readme.txt', 'utf8', function(err, data) {
  // console.log(data);
  fs.writeFile('writeMe.txt', data);
});


