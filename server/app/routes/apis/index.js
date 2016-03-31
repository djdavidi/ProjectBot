var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');
var Api = mongoose.model('Api');


router.get('/categories',function(req,res){
	Api.distinct('category')
	.then(function(cats){
		res.send(cats);
	})
})

//loop over this
var getRandomFromCategory = function(){

}