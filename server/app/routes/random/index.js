var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');
var Api = mongoose.model('Api');
var Dataset = mongoose.model('Dataset');
var Tool = mongoose.model('Tool');

//  apis/tech
// apis/random/
router.get('/',function(req,res){
	// send back array of objects maybe?
	// req.body.selectedCategories
	// req.body.alreadySelectedItemIds
	Api.find().limit(3)
	.then(function(returnedApis){
		console.log("apis"+returnedApis)
		res.send(returnedApis)
	})
	// so if category
})
