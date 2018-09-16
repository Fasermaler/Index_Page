const noOfSuggestions = 8 ;
const googleSearchStr = "http://suggestqueries.google.com/complete/search?callback=?";

var searchInput = document.getElementById("searchInput");
var searchDropdown = document.getElementById("searchDropdown");
var suggestionArray = [];
var searchText = "";
var selectedIndex = -1;

searchInput.addEventListener("keyup", checkSuggestions);
searchInput.addEventListener("focusout", delayClear);

function checkSuggestions(evt) {
	suggestionArray = [];
	if (evt.keyCode != 38 && evt.keyCode != 40) {
		searchText = searchInput.value;
	}
	if (searchText.length == 0) {
		clearDropdown();
	} else {
		$(document).ready(function () {
			$.getJSON(googleSearchStr, {
					"hl":"en",
					"jsonp":"suggestCallBack",
					"q":searchText,
					"client":"youtube"
			});
			suggestCallBack = function(results) {
				$.each(results[1], function(key, val) {
					suggestionArray.push(val[0]);
				});
				if (results[1].length > noOfSuggestions) {
					suggestionArray.length = noOfSuggestions;
				} else {
					suggestionArray.length = results[1].length;
				}
				if (evt.keyCode == 38) {
					suggestionNav("up");
				} else if (evt.keyCode == 40) {
					suggestionNav("down");
				} else {
					selectedIndex = -1;
					updateDropdown();
				}
			};
		});
	}
	if (evt.keyCode == 13) {
		goToLink();
	}
}

function updateDropdown() {
	clearDropdown();
	for (let i=0; i<suggestionArray.length; i++) {
		/*let item = document.createElement("li");
		let a = document.createElement("a");
		a.textContent = suggestionArray[i];
		a.setAttribute('href', "http://www.google.com/search?q=" + suggestionArray[i]);
		item.className = "searchDropdownItem";
		item.appendChild(a);
		item.addEventListener("click", suggestionClicked);
		searchDropdown.appendChild(item);*/
		
		let item = document.createElement("li");
		item.className = "searchDropdownItem";
		item.innerHTML = suggestionArray[i];
		item.addEventListener("click", suggestionClicked);
		item.addEventListener("mouseover", function() {
			item.className = "searchItemSelected";
		});
		item.addEventListener("mouseout", function() {
			item.className = "searchDropdownItem";
		});
		searchDropdown.appendChild(item);
	}
}

function clearDropdown() {
	while (searchDropdown.firstChild) {
		searchDropdown.removeChild(searchDropdown.firstChild);
	}
}

function delayClear() {
	setTimeout(function() {
		clearDropdown();
	}, 100);
}

function changeInputText(str) {
	searchInput.value = str;
	searchInput.setSelectionRange(str.length, str.length);
}

function goToLink() {
	window.open("http://www.google.com/search?q=" + searchInput.value, "_self");
}

function suggestionClicked(evt) {
	changeInputText(evt.target.innerHTML);
	goToLink();
}

function suggestionNav(direction) {
	if (direction == "up") {
		selectedIndex--;
		if (selectedIndex < -1) {
			selectedIndex = suggestionArray.length - 1;
		}
		if (searchDropdown.lastChild) {
			if (selectedIndex != suggestionArray.length - 1) {
				searchDropdown.children[selectedIndex+1].className = "searchDropdownItem";
			}
			if (selectedIndex != -1) {
				searchDropdown.children[selectedIndex].className = "searchItemSelected";
			}
		}
	}
	if (direction == "down") {
		selectedIndex++;
		if (selectedIndex > suggestionArray.length - 1) {
			selectedIndex = -1;
		}
		if (searchDropdown.firstChild) {
			if (selectedIndex != 0) {
				if (selectedIndex == -1) {
					searchDropdown.children[suggestionArray.length-1].className = "searchDropdownItem";
				} else {	
					searchDropdown.children[selectedIndex-1].className = "searchDropdownItem";
				}
			}
			if (selectedIndex != -1) {
				searchDropdown.children[selectedIndex].className = "searchItemSelected";
			}
		}
	}
	if (selectedIndex == -1 ) {
		changeInputText(searchText);
	} else {
		changeInputText(suggestionArray[selectedIndex]);
	}
}