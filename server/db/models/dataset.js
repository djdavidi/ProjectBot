'use strict';
var mongoose = require('mongoose')

var schema = mongoose.Schema({
    name:String,
    description:String,
    link:String,
    category:String,
    numTimesViewed:{
    	type:Number,
    	default:0
    },
    numTimesSelected:{
    	type:Number,
    	default:0
    }
})


mongoose.model('Dataset',schema)