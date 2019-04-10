const express = require('express');
const cards = require('./data/cardData.js');

var app = express();


app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/assets/css'));

app.get('/', function(req, res){

  res.render('index', {cards: cards});
});



app.listen(3000, function(){
  console.log('listening on localhost:3000');
})
