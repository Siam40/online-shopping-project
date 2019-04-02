var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index',);
});

router.get('/cart', function(req, res) {
  res.render('cart',);
});


router.get('/checkout', function(req, res) {
  res.render('checkout',);
});

router.get('/login', function(req, res) {
  res.render('login',);
});

router.get('/404', function(req, res) {
  res.render('404',);
});


module.exports = router;
