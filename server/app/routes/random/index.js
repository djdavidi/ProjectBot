var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');
var Api = mongoose.model('Api');
var Dataset = mongoose.model('Dataset');
var Tool = mongoose.model('Tool');
var Promise = require('bluebird')

//  apis/tech
// apis/random/
router.get('/',function(req,res){
	//have to make sure they are unique
	// send back array of objects maybe?
	// req.body.selectedCategories
	// req.body.alreadySelectedItemIds
	console.log("req.params"+JSON.stringify(req.params))
	var a = Api.findRandom(req.params.apiOne)
	var b = a.then(function(apiOneRes){
			return Api.findRandom(req.params.apiTwo)			
	})
	var c = b.then(function(apiTwoRes){
		return Dataset.findRandom(req.params.datasetOne)
	})
	Promise.join(a,b,c,function(apiOneRes,apiTwoRes,datasetOneRes){
		console.log(apiOneRes,apiTwoRes,datasetOneRes)
		res.send([apiOneRes,apiTwoRes,datasetOneRes])
	})
})


router.get('/categories',function(req,res){
	Api.distinct('category')
	.then(function(ApiCats){
		return[ApiCats,
		Dataset.distinct('category')
		.then(function(DataCats){
		return DataCats;
		})]
	})
	.spread(function(ApiCats,DataCats){
		console.log(DataCats)
		res.send([ApiCats,DataCats])
	})

})