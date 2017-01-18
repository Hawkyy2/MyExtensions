

function notify(messages){
console.log(messages);

var gettingAllStorageItems = browser.storage.local.get(null);


gettingAllStorageItems.then((results) => {
    var noteKeys = Object.keys(results);


    for(noteKey of noteKeys) {
      var curValue = results[noteKey];

    }
}, onError);


if(messages.title != null && messages.message != null){
	browser.notifications.create({
    "type": "basic",
        "title": messages.title,
    "message": messages.message

});
}
else if(messages.title != null){
handleCreated();

}
}


function onError(error) {
  console.log(error);
}

browser.runtime.onMessage.addListener(notify);

function handleCreated() {
	chrome.tabs.create({
     "url": chrome.extension.getURL("popup_code/report.html")
   });
}



