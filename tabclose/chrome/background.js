chrome.browserAction.onClicked.addListener((tab) => {

	console.log(tab);
  console.log(tab.url+"---------"+tab.id);

var removing = chrome.tabs.remove(tab.id);

var querying = chrome.tabs.query({currentWindow: true});
querying.then(logTabs, onError);

console.log("created suucessfully");
});

function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

/*
chrome.browserAction.onClicked.addListener(mylove(tab));

function mylove(tab) {
  console.log(tab.url+"---------"+tab.id);

var removing = chrome.tabs.remove(tab.id);


console.log("created suucessfully");
}
*/
