var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');
var Api = mongoose.model('Api');
var Dataset = mongoose.model('Dataset');


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
		res.send([ApiCats,DataCats])
	})

})

//loop over this
var getRandomFromCategory = function(){

}