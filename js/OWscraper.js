// Overwatch Stats Scraper
var request = new XMLHttpRequest();

battletag = "OinkerBob-1276";
reg = "us"

const url='https://playoverwatch.com/en-us/career/pc/';
passURL = url + reg + '/' + battletag;
document.getElementById("OWstats").innerHTML = passURL + "\n";

page = request.open('GET', passURL, true);

request.onload = function() {
	// work with data
	var data = JSON.parse(this.response);
		
	if(request.status >= 200 && request.status < 400) {
		document.getElementById("OWstats").innerHTML= data;
	} else {
		document.getElementById("OWstats").innerHTML = "Overwatch machine broke";
		console.log('error');
	}	
} request.send();

//get
//$('.btn').ready(function(){
//	$.get(passURL, function(data, status){
//		console.log(`${data}`)
//	});
//}
