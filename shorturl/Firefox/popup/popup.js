

document.getElementById("urlclick").addEventListener("click", myFunction);

function myFunction() {

var urlToShort = document.getElementById("urltext").value;

	

// API credits to tinyurl
var apiURL = 'http://tinyurl.com/api-create.php?url='+urlToShort;

// Get the short URL HTTP Request
loadXMLDoc(apiURL)
}


function loadXMLDoc(apiURL) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	console.log(this);
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerText =
      this.responseText;
    }
  };
  xhttp.open("GET", apiURL, true);
  xhttp.send();
}
