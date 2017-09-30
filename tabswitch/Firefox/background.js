var toadd = 1;
var currentIndex = -1;

browser.commands.onCommand.addListener((command) => {
  console.log("onCommand event received for message: ", command);

	if(command == 'next-tab'){
		toadd = 1;
	}else if(command == 'previous-tab'){
		toadd = -1;
	}

var querying = browser.tabs.query({currentWindow: true, active: true});
querying.then(logTabs, onError);
});


function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.index);
	currentIndex = tab.index;
  var moving = browser.tabs.move(tab.id, {index: (tab.index + toadd)});
  moving.then(onMoved, onError);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function onMoved(tab) {
	if(currentIndex == tab[0].index){
		var moving = browser.tabs.move(tab[0].id, {index: 0});
		moving.then(onMoveds, onError);
	}
}

function onMoveds(tab) {
  console.log(tab[0]);
}

function onError(error) {
  console.log(`Error: ${error}`);
}
