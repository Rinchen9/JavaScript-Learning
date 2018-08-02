function checkAddress(fieldId) {
	if(document.getElementById(fieldId).value === "") {
		alert("Email address required!");
	}
}

function fillCity() {
	var cityName;
	var zipEntered = document.getElementById("zip").value;

	switch(zipEntered) {
		case "1": cityName = "Austin"; break;
		case "2": cityName = "Indianapolis"; break;
		default: alert("Enter 1 or 2");
	}

	document.getElementById("city").value = cityName;
}

function expandLoris() {
	var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
	document.getElementById("slowLoris").innerHTML = expandedParagraph;
}