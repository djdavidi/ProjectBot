'use strict';
var mongoose = require('mongoose')

var schema = mongoose.Schema({
    name:String,
    description:String,
    apis:[{
        type:mongoose.Schema.Types.ObjectId,ref:'Api'
    }],
     datasets:[{
        type:mongoose.Schema.Types.ObjectId,ref:'Dataset'
    }],
     tools:[{
        type:mongoose.Schema.Types.ObjectId,ref:'Tool'
    }]

})

// have to aggregate them or whatever that is to sum them

mongoose.model('Combination',schema)