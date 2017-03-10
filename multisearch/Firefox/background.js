function resetDefaultSuggestion() {
  chrome.omnibox.setDefaultSuggestion({
    description: 'dapi: Search the Drupal API for %s'
  });
}

resetDefaultSuggestion();

chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
  // Suggestion code will end up here.
});

chrome.omnibox.onInputCancelled.addListener(function() {
  resetDefaultSuggestion();
});

function navigate(url) {

	url = findURL(url);
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  });
}

chrome.omnibox.onInputEntered.addListener(function(text) {
/*	
	let parts = text.spilt(' ');
	let partOne = parts[0];
	let searchURL = findSearchEngin(partOne);

	let query = '';

  parts.forEach(part => {
    if (!parts.indexOf(partOne) != 0) {
      queryParts.push(part);
    }
  });

  query = queryParts.join(' ');


	console.log("query:::::::::::"+query+":::::::::::::::"+searchURL);
*/
  navigate( text);
});


function findURL(text){
	var parts = text.split(" ");
	var partOne = parts[0];
	var searchURL = findSearchEngin(partOne);

	console.log(searchURL);
	var  queryParts = [];


  parts.forEach(part => {
    if (parts.indexOf(part) != 0) {
      queryParts.push(part);
    }
  });

	query = queryParts.join(' ');
		
	console.log(queryParts);

	
	return searchURL+query;
}

function findSearchEngin(searchEngText){
	
	if(searchEngText == 'wp'){
		return 'https://wikipedia.org/wiki/Search?search='
	}
}
