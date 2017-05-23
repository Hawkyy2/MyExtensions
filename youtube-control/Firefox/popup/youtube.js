
chrome.runtime.onMessage.addListener(updatePopUp);


function updatePopUp(request, sender,jsonVal){
console.log("message received");

console.log("the response we received is::::"+ request.data);

}


/*document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("beast")) {
    return;
  }

  var name = e.target.textContent;


         chrome.runtime.sendMessage({"actionid": e.target.id});
});


*/
