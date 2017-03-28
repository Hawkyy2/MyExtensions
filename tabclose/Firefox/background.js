browser.browserAction.onClicked.addListener((tab) => {
console.log("inside the addlis");


browser.browserAction.setPopup({popup: "/popup/choose_beast.html"})

	console.log(tab);
  console.log(tab.url+"---------"+tab.id);

var removing = browser.tabs.remove(tab.id);



var querying = browser.tabs.query({currentWindow: true});
querying.then(logTabs, onError);

console.log("created suucessfully");
});

function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
	var x = chrome.extension.getViews({type:"popup"});
	if (x.length>0){
	 console.log(x);
	}
	else{
		console.log(x);	
	}
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

/*
browser.browserAction.onClicked.addListener(mylove(tab));

function mylove(tab) {
  console.log(tab.url+"---------"+tab.id);

var removing = browser.tabs.remove(tab.id);


console.log("created suucessfully");
}
*/
