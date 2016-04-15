'use strict';
var mongoose = require('mongoose')

var schema = mongoose.Schema({
    name:{
        type:String,
        default:'Your Idea'
    },
    description:{
        type:String,
        default:'Your description of your incredible that will change the world.'
    },
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

mongoose.model('Idea',schema)