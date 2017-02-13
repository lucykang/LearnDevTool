var express = require('express');
var router = express.Router();

router.get('/sample-route', (req, res) => {
  res.send({
    website: 'projectCoffee',
    blogPost: true
  })
})

module.exports = router;