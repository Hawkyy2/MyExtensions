
browser.tabs.onUpdated.addListener(listenForTabChange);

browser.tabs.onActivated.addListener(listenWhenTabChage);

browser.tabs.onCreated.addListener(listenWhenTabCreated);

// Come to this method when the tab url gets changed
function listenForTabChange(tabId, changeInfo, tab) {
// Get the current Tab details.
		 console.log(' tab url is changed');
	getCurrentTabDetails(); 
}

// Come to this method when the tab gets changed.
function listenWhenTabChage (activeInfo) {
// Get the current Tab details.
	 console.log(' tab is changed');
	
getCurrentTabDetails();
}

// When the tab is created we will get tab object, from tab object itself we can get the tab id and show directly
function listenWhenTabCreated(tab){
	console.log(' tab is created');
	browser.pageAction.show(tab.id)
}


function getCurrentTabDetails(){
	var querying = browser.tabs.query({currentWindow: true, active: true});
	querying.then(getInfoForTab, onError);
}

/* 
Once we get the tab Information of current tab, come here.
get the current tab object.
check current tab is Article type.
	if Article type then show the pageAction icon.

*/
function getInfoForTab(tabs) {

  if (tabs.length > 0) {
		console.log(tabs[0]); 
	if(tabs[0].isArticle){
		browser.pageAction.show(tabs[0].id);
	}
    }
}


function onError(error) {
  console.log(`Error: ${error}`);
}



/*
	After the user clicked the small page action icon, we will be listening at doPageActClickProc
*/
browser.pageAction.onClicked.addListener(doPageActClickProc);



// Bring in the save as PDF pop-up
function doPageActClickProc(){
	   // browser.tabs.toggleReaderMode();	
	 browser.tabs.saveAsPDF({});
}
