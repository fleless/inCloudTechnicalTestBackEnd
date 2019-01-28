var express = require('express');
var tasksController = require('../controllers/tasksController');
var router = express.Router();

router.get('/task', function (req, res, next) {
    res.send('respond with a resource');
});
router.get('', tasksController.getTasks);
router.post('', tasksController.addTask);
module.exports = router;