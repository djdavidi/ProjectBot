var apiData = require('./scraped')
var Promise = require('bluebird')
var rp = require('request-promise')
var request = require('request')
var cheerio = require('cheerio');
var fs = require('fs');
var tempArray =[];

function getApiData(){
	request(url,function(error,response,body){
		if(error){
			console.log("ERROR "+error);
		}
		else{
			var $= cheerio.load(body);
			classes.forEach(function(individualClass){
				$(individualClass).each(function(i,e){
					var apiObject = {
						name:$(e).children().first().text().trim(),
						link: "programmableweb.com"+$(e).find('a').attr('href'),
						description:$(e).find('td:nth-child(2)').text().trim(),
						category:$(e).find('td:nth-child(3) > a').text()
					};
					tempArray.push(apiObject);
				})
			})
			var next= $('li.pager-last.last > a').attr('href');
			url = "http://programmableweb.com"+next
		}
			if(next){
				setTimeout(function(){
					getApiData();
				},2000)
			} 
			else{
				fs.writeFile('scraped.json',JSON.stringify(holdArray),function(error){
					if(error) console.log("Error "+error)
				});
			}

	})
}
// getApiData();

//realised that i needed the longer descriptions
// obviously not complete
function getDetails(){
	var counter = 0;
	Promise.map(apiData,function(api){
		return rp("http://"+api.link)
		.then(function(html){
				var $ = cheerio.load(html);
				api.link = $('#tabs-content > div.section.specs > div:nth-child(4) > span > a').attr('href');
				api.description = $('#tabs-header-content > div > div.api_description.tabs-header_description').text().trim();
				counter ++;
				console.log("Counter"+counter)
			return api
			
		})
	},{concurrency:4})
	.then(function(detailedArray){
		fs.writeFile('detailedApi.json',JSON.stringify(detailedArray),function(error){

			console.log("did it length"+detailedArray.length)
		})
		
	})
	.catch(function(err){
		console.log("err"+err);
	})

}
getDetails()

function getDatasets(){
	// get by tag name, then for each of those get the ul, then set the category equal that that h2 text, link equal 
	// to the li's href and description "To be set"
	rp('https://github.com/caesar0301/awesome-public-datasets/blob/master/README.rst#agriculture')
	.then(function(html){
		var $ = cheerio.load(html);
		var list = $('h2');
		// removing two unnecessary actual headers in beginning
		list = list.slice(1,list.length-1)
		list.each(function(){
			 var categoryArr =$(this).next().children('li')
			 var category = $(this).text()
			 categoryArr.each(function(){
			 	var dataset = {
			 		name: $(this).text(),
			 		link: $(this).children('a').attr('href'),
			 		description: "No Description Yet",
			 		category: category
			 	}
			 	console.log("DATASET"+dataset)
			 	tempArray.push(dataset)
			 })
		})
	})
	.then(function(){
			fs.writeFile('datasetInfo.json',JSON.stringify(tempArray),function(error){
			console.log("did it length"+tempArray.length)
		})
	})
}