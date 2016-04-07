'use strict';
var mongoose = require('mongoose')

var schema = mongoose.Schema({
    name: String,
    description: String,
    link: String,
    category: String,
    //defautl all
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
        default:'Api'
    }
})

schema.statics.findRandom = function(category) {
    var self = this;
    var randNum;
    var res;
    if (category === 'undefined') {
        console.log('in not category api'+category)
        return mongoose.model('Api').count()
            .then(function(amountOfData) {
                randNum = Math.floor(Math.random() * amountOfData)
                res = self.find({}).limit(1).skip(randNum)
              return res;
            })
    } else {
        console.log("in category\n")
        return mongoose.model('Api').where({ category: category }).count()
            .then(function(amountOfData) {
                randNum = Math.floor(Math.random() * amountOfData)
                res = self.find({ category: category }).limit(1).skip(randNum)
                return res;
            })
    }
}


mongoose.model('Api', schema)
