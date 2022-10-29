var express = require('express');
var router = express.Router();

/* GET market page. */
router.get('/market', function(req, res, next) {
  res.render('market', { title: 'Express' });
});

module.exports = router;