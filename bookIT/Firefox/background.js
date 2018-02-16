// Add the contextMenu option to bookmark
browser.contextMenus.create({
  id: "bookmark",
  title: "Add to Bookmark",
  contexts: ["page"]
});

// Listen to contextMenu when selected
browser.contextMenus.onClicked.addListener(contextMenuAction);


function contextMenuAction(info, tab){

        if(info != null && info.hasOwnProperty('menuItemId')){
	console.log(info);
	console.log(tab.url);

       }

}



