var express = require('express');
var router = express.Router();

/* GET swap page. */
router.get('/borrowing', function(req, res, next) {
  res.render('borrowing', { title: 'Express' });
});

module.exports = router;