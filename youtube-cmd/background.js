var commandToExecute = '';
var commandType = '';


browser.commands.onCommand.addListener(commandListening);

function commandListening(commandName) {

 if (commandName == 'next_song') {
  commandToExecute = 'document.querySelector(".ytp-next-button.ytp-button").click()';
  commandType = 1;
 } else if (commandName == 'switch_case') {
  commandToExecute = 'document.querySelector(".ytp-play-button.ytp-button").click()';
  commandType = 2;
 }

 console.log('hai');


 var querying = browser.tabs.query({
  url: "*://*.youtube.com/*"
 });
 querying.then(executeOnTab, onError);

}

function executeOnTab(tabs) {
 var tabID = tabs[0].id; // getting the first tab ID alone
 console.log('tab id we going to exectue is' + tabID);
 var executing = browser.tabs.executeScript(
  tabID, {
   code: commandToExecute
  }
 );
 executing.then(onExecuted, onError);

}

function onError(error) {
 console.log(`Error: ${error}`);
}

function onExecuted(result) {
 console.log(`We executed script in the first youtube tab`);

 var titleVal = '';

 if (commandType == 1) {
  titleVal = 'Song Changed';
 } else if (commandType == 2) {
  titleVal = 'Song Paused/Played';
 }

 browser.notifications.create('Youtube', {
  "type": "basic",
  "iconUrl": browser.extension.getURL("icons/icon-96.png"),
  "title": "Notification Title!",
  "message": titleVal
 });


}
