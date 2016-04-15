var router = require('express').Router();
var mongoose = require('mongoose');
var Promise = require('bluebird')
var Idea = mongoose.model('Idea')
var User = mongoose.model('User')
module.exports = router;



router.get('/', function(req, res) {
    console.log("map" + JSON.stringify(req.user))
    Promise.map(req.user.ideas,function(ideaId) {
        return Idea.findById(ideaId).populate('apis datasets tools')
            .then(function(idea) {
                return idea
            })

    })
    .then(function(ideaArr){
    	console.log("ideaArr"+ideaArr)
    	res.send(ideaArr)
    	
    })
})


router.post('/', function(req, res, next) {

    Idea.create(req.body)
        .then(function(createdIdea) {
            console.log("req.user" + req.user)
            return User.findOne({ _id: req.user._id })
                .then(function(foundUser) {
                    console.log("createdIdea" + createdIdea)
                    console.log("foundUser" + foundUser)
                    foundUser.ideas.push(createdIdea)
                    foundUser.save()
                    res.send({})
                })
        })
        .then(null, function(err) {
            return next(err)
        })
})
