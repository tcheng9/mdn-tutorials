var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

router.get('/about', function(req, res){
  res.send('About this wiki');
})

module.exports = router;
