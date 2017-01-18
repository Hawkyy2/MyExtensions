var declineBtn = document.getElementById('decline');
var acceptBtn = document.getElementById('accept');
var reportBtn = document.getElementById('report');

declineBtn.addEventListener('click', showSad);
acceptBtn.addEventListener('click', addDrank);
reportBtn.addEventListener('click', openReport);

function showSad(){

console.log("inside sad");




var date = new Date();
        var milliSecondString = date.getTime().toString();

        var dataToInsert = {};
        dataToInsert[milliSecondString] = "Missed Water";

        browser.storage.local.set(dataToInsert);


	chrome.runtime.sendMessage({"title": "Sad to See you!","message": "Drinking Water is very important to our health"});
}

function addDrank(){
	
console.log("inside happy");

	var date = new Date();
	var milliSecondString = date.getTime().toString();

	var dataToInsert = {};
	dataToInsert[milliSecondString] = "Drank Water";

	browser.storage.local.set(dataToInsert);

chrome.runtime.sendMessage({"title": "Thanks for Drinking Water","message": "Your Health will be safe Gurarded daily"});
}


function openReport(){
chrome.runtime.sendMessage({"title" : "report"});

}

