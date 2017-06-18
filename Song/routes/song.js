var express = require('express');
var router = express.Router();
var db = require('../schemas/db');
var songObj = db.songModel;

router.get('/song', function (req,res) {
    console.log("comes here song!!");
   res.redirect('song.html');
});

router.get('/song/:name', function(req, res) {
   var name = req.params.name;
   songObj.findById(name, function (err, song) {
       if(err){
           console.log('song not exist in library');
       }
       res.render('/songDetail',song);
   })
});

router.post('/create', function(req, res){
    var song = songObj.findById(req.body.name);
    if(song !== undefined){
        console.log('this song has exist in library');
        return;
    }
    var newSong = {
      name:  req.body.name,
      author: req.body.author,
      style:  req.body.style,
      comments: [
          { content: req.body.content,
            date: Date.now(),
          }
      ],
      publishDate: req.body.publishDate ,
      language: req.body.language,
      description: req.body.description,
      rate : req.body.rate
    }
    songObj.save(newSong, function (err) {
        if(err){
            console.log('song create unsucessfully ');
            return;
        }
        // forward to list page
        res.redirect('/song/list');
    })
});

module.exports = router;