var express = require('express');
var router = express.Router();

/* GET swap page. */
router.get('/swap', function(req, res, next) {
  res.render('swap', { title: 'Express' });
});

module.exports = router;