var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');



router.get('/favorites/:userId/:itemId', function(req, res) {
	console.log("hey");
	res.send("hey")
})