var apiData = require('./scraped')
var rp = require('request-promise')
var cheerio = require('cheerio');
var fs = require('fs');

// function makeRequest(){
// 	request(url,function(error,response,body){
// 		if(error){
// 			console.log("ERROR "+error);
// 		}
// 		else{
// 			var $= cheerio.load(body);
// 			classes.forEach(function(individualClass){
// 				$(individualClass).each(function(i,e){
// 					var apiObject = {
// 						name:$(e).children().first().text().trim(),
// 						link: "programmableweb.com"+$(e).find('a').attr('href'),
// 						description:$(e).find('td:nth-child(2)').text().trim(),
// 						category:$(e).find('td:nth-child(3) > a').text()
// 					};
// 					holdArray.push(apiObject);
// 				})
// 			})
// 			var next= $('li.pager-last.last > a').attr('href');
// 			url = "http://programmableweb.com"+next
// 		}
// 			if(next){
// 				setTimeout(function(){
// 					makeRequest();
// 				},500)
// 			} 
// 			else{
// 				fs.writeFile('scraped.json',JSON.stringify(holdArray),function(error){
// 					if(error) console.log("Error "+error)
// 				});
// 			}

// 	})
// }
// makeRequest();

function getDetails(){
	
		var api = api;
		rp("http://"+api.link)
		.then(function(body){
				var $= cheerio.load(body);
				api.link = $('#tabs-content > div.section.specs > div:nth-child(4) > span > a').attr('href');
				console.log("new link"+api.link)
				api.description = $('#tabs-header-content > div > div.api_description.tabs-header_description').text().trim();
				console.log("new link"+api.link)
			return api

}
getDetails()
