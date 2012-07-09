var http = require('http');
var request = require('request');
var titletext = "HTML Simplifier for SFU ENGAGE"
exports.index = function(req, res){
	res.render('index', { title: titletext});
};

exports.simplify = function(req, res){
	console.log(req.body.url)
	request(req.body.url, function (error, response, body) {
		//console.log(response.statusCode)
	  
	  if (error){
		  console.log(error);
		  res.render('index', { title: titletext, errormsg : error });
		  
	  }
	  else if (response.statusCode == 200) {
	    console.log(body) // Print the google web page.
	    res.render('index', { title: titletext, article : body});

	  }
	});	
	//res.render('index', { title: 'HTML Simplified' });
};
