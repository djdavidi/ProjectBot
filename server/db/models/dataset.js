'use strict';
var mongoose = require('mongoose')

var schema = mongoose.Schema({
    name: String,
    description: String,
    link: String,
    category: String,
    numTimesViewed: {
        type: Number,
        default: 0
    },
    numTimesSelected: {
        type: Number,
        default: 0
    },
    class:{
        type:String,
        default:'Dataset'
    }
})

schema.statics.findRandom = function(category) {
    console.log('cat'+category)
    var self = this;
    var randNum;
    var res;
    if (category === 'undefined') {
        console.log("IN NOT CATEGORY\n")
        return mongoose.model('Dataset').count()
            .then(function(amountOfData) {
                console.log("data mount of"+ amountOfData)
                randNum = Math.floor(Math.random() * amountOfData)
                res = self.find({}).limit(1).skip(randNum)
                console.log("res" + res.length)
                return res;
            })
    } else {
        console.log("in category\n")
        return mongoose.model('Dataset').where({category:category}).count()
            .then(function(amountOfData) {
                console.log("data mount of"+ amountOfData)
                randNum = Math.floor(Math.random() * amountOfData)
                res = self.find({ category: category }).limit(1).skip(randNum)
                 console.log("res data cate" + res.length)
                return res
            })
    }
}
mongoose.model('Dataset', schema)
