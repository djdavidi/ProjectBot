var router = require('express').Router();
var mongoose = require('mongoose');
module.exports = router;



router.get('/favorites', function(req, res) {
	console.log("hey");
	res.send({})
})


router.put('/favorites', function(req, res) {
	console.log("user"+req.user)
	console.log("req.body"+JSON.stringify(req.body))
	console.log("hey");
	res.send("hey")
})