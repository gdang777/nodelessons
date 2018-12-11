const express = require('express');

var app =  express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.send('hello world again');
});

app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req, res){
  const data = {age: 35, job: 'ninja'}
  res.render('profile', {person : req.params.name, data: data});
});

app.listen(3000, function(){
  console.log("Server is now listening...");
});
