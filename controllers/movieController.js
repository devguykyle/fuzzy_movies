module.exports = function(app){


  app.get('/', function(req, res){
    res.render('index', {cards: cards});
  });

  app.get('/detail', function(req, res){

  });


  app.post('/newMovie', function(req, res){
    //redirect to /
  });

  app.delete('/deleteMovie', function(req, res){

  });

  app.update('/update', function(req, res){

  });
}
