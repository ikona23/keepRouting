var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Keep Routing', condition: true, myArray: [3,2,1,4,[5,2,1]] });
})


module.exports = router;
