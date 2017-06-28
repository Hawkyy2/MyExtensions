var actionID = '';

chrome.runtime.onMessage.addListener(doyoutubeaction);


 // Get all the Links
function listenBrowserClick(tab){
	console.log("inside the listen browserclick");
	var searching = browser.history.search({text: "youtube.com"});
	searching.then(listURLs,tab.id);
}


// Iterate the youtube links
function listURLs(urlObject,tabid){

console.log("the tab id is:::::"+tabid);

	var masterDiv = '';


console.log("we are going to send message");

browser.tabs.query({
    currentWindow: true,
    active: true
  }).then((tabs) => {
console.log("the tab id is ::"+tabs[0].id);
browser.tabs.sendMessage(tabs[0].id, {data: urlObject});
}).catch(onError).then(onmessu);	
//browser.tabs.sendMessage(parseInt(tabid), {data: urlObject});



}


function onmessu(){
	console.log(" on message succes");
	browser.browserAction.setPopup({popup: "/popup/youtube.html"});

}

function onError(error) {
  console.error(`Error: ${error}`);
}

function sendMessageToTabs(tabs){
	console.log("inside sendMessage");
browser.tabs.sendMessage(tabs[0].id, {data: urlObject});
}



function getActiveTab() {
  return browser.tabs.query({active: true, currentWindow: true});
}






// Play/pause/next song of V1
function doyoutubeaction(message){
actionID = message.actionid;

var querying = browser.tabs.query({url: "*://*.youtube.com/*"});
querying.then(logTabs, onError);

}


// get all the tab id and changeSong
function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
	changeSong(tab.id);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function onExecuted(result) {
  console.log(`Exectured the script`);
}


// do the operation
function changeSong(tabid){

var codeToExecute = '';
codeToExecute = findCode(tabid);


var executing = browser.tabs.executeScript(
  		tabid,
  		{code: codeToExecute}
	);
executing.then(onExecuted, onError);

}


// Find the code executiong 
function findCode(tabid){

	if(actionID == 'nextsong'){
        	return 'document.querySelector(".ytp-next-button.ytp-button").click()'
	}else if(actionID == 'switchplay'){
        	return 'document.querySelector(".ytp-play-button.ytp-button").click()'
	}else if(actionID == 'replay'){
        	return 'document.querySelector(".ytp-prev-button.ytp-button").click()'
	}else if(actionID == 'lastsong'){
        	  browser.tabs.executeScript(
  				tabid,
  				{code: 'document.querySelector(".ytp-prev-button.ytp-button").click()'}
				);
	return 'document.querySelector(".ytp-prev-button.ytp-button").click()'
	}

}

