var express = require('express');
var router = express.Router();

const data = { 
  "slackUsername": "IsaacToyin", 
  "backend": true, 
  "age": 30, 
  "bio": "I am a backend engineer who is on a mission to develop scalable software" 
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(201).send(data);
});

module.exports = router;
