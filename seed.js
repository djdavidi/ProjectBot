var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = mongoose.model('User');
var Api = mongoose.model('Api');
var Dataset = mongoose.model('Dataset');
var apiData = require('./scraped')
var datasetInfo = require('./datasetInfo')
console.log("COUNT"+ apiData.length)
var seedUsers = function () {

    var users = [
        {
            email: 'test@test.com',
            password: 'test'
        },
        {
            email: 'bob@bob.com',
            password: 'bob'
        }
    ];

    return User.create(users);

};


connectToDb.then(function () {
    User.find({}).then(function (users) {
        if (users.length === 0) {
            return seedUsers();
        } else {
            console.log(chalk.magenta('Seems to already be user data, exiting!'));
            process.kill(0);
        }
    }).then(function () {
        console.log(chalk.green('User seed uccessful!'));
        
    })
})
.then(function(){
   Dataset.find({}).then(function (datasets) {
        if (datasets.length === 0) {
            return Dataset.create(datasetInfo)
        } else {
            console.log(chalk.magenta('Seems to already be dataset data, exiting!'));
            process.kill(0);
        }
    }).then(function () {
        console.log(chalk.green('Dataset seed successful!'));
        
    })
})
.then(function(){
    Api.find({})
    .then(function(api){
         if (api.length === 0) {
            return Api.create(apiData)
        } else {
            console.log(chalk.magenta('Seems to already be api data, exiting!'));
            process.kill(0);
        }
    }).then(function () {
        console.log(chalk.green('Api seed successful!'));
        process.kill(0);
    }).catch(function (err) {
        console.error("errroro"+err);
        process.kill(1);
    });
})