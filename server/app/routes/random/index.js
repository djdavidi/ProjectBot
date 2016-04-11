var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');
var Api = mongoose.model('Api');
var Dataset = mongoose.model('Dataset');
var Tool = mongoose.model('Tool');
var Promise = require('bluebird')

//  apis/tech
// apis/random/
router.get('/', function(req, res) {
    console.log("random apis/rand")
    //have to make sure they are unique
    // send back array of objects maybe?
    // req.body.selectedCategories
    // req.body.alreadySelectedItemIds
    console.log("req.query" + JSON.stringify(req.query))
    if (!req.query.api) req.query.api = [null, null]
    var a = Api.findRandom(req.query.api[0])
    var b = Api.findRandom(req.query.api[1])
    var c = Dataset.findRandom(req.query.dataset)
    Promise.all([a, b, c]).spread(function(val1, val2, val3) {
        var values = [val1, val2, val3]
        console.log("promise results" + values)
        res.send(values)
    })
})


router.get('/categories', function(req, res) {
    Api.distinct('category')
        .then(function(ApiCats) {
            return [ApiCats,
                Dataset.distinct('category')
                .then(function(DataCats) {
                    return DataCats;
                })
            ]
        })
        .spread(function(ApiCats, DataCats) {
            res.send([ApiCats, DataCats])
        })

})
