var express = require('express');
var router = express.Router();

const data = { 
  "slackUsername": "IsaacToyin", 
  "backend": true, 
  "age": 30, 
  "bio": "Continue learning" 
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(201).send(data);
});

module.exports = router;
