const express = require('express');

var app = express();


app.set('view engine', 'ejs');

app.get('/', function(req, res){
  cards = [
           {title: 'Card 1', details: 'These are Details for card 1'},
           {title: 'Card 2', details: 'These are Details for card 2'}
          ];
  res.render('home', {cards: cards});
});


app.listen(3000, function(){
  console.log('listening on localhost:3000');
})
