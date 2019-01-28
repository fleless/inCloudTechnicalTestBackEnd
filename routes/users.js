var express = require('express');
var userController = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/findUser', userController.getUser);
router.post('', userController.addUser);
module.exports = router;