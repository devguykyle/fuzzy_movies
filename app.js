const express = require('express');
const cards = require('./data/cardData.js');

var app = express();


app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/assets/css'));

app.get('/', function(req, res){
  res.render('test');
;});

app.get('/admin', function(req, res){
  res.render('index', {cards: cards});
});

app.get('/admin', function(req, res){

});


app.listen(3000, function(){
  console.log('listening on localhost:3000');
});



/*
Home - all movies and search
Movie detail view - modal
Login view
logout controller
comment controller
upvote controller
downvote controller

*/
