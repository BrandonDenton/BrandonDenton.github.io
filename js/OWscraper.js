// Overwatch Stats Scraper
var request = new XMLHttpRequest();

battletag = "OinkerBob-1286";
reg = "us"

const url='https://playoverwatch.com/en-us/career/pc/';
passURL = url + reg + '/' + battletag;

page = request.open('GET', passURL, true);

request.onload = function() {
		// work with data
		var data = JSON.parse(this.response);
		
		if(request.status >= 200 && request.status < 400) {
				print(data);
		} else {
			print("Overwatch machine broke")
			console.log('error');
		}	
	}
} request.send();

//get
//$('.btn').ready(function(){
//	$.get(passURL, function(data, status){
//		console.log(`${data}`)
//	});
//}
