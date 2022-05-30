var express = require('express');
var router = express.Router();

/* GET swap page. */
router.get('/pools', function(req, res, next) {
  res.render('pools', { title: 'Express' });
});

module.exports = router;