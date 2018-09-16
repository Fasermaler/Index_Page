var localDate = new Date(),
	nSeconds = localDate.getSeconds(),
	nMinutes = localDate.getMinutes(),
	nHours = localDate.getHours(),
	nDay = dayToText(localDate.getDay()),
	nDate = localDate.getDate() + dateSupScript(nDate).sup(),
	nMonth = monthToText(localDate.getMonth());
var time = document.getElementById("time"),
	details = document.getElementById("details");

// Set a 1s interval to update
setInterval(myTimer, 1000);

// Runs myTimer()
myTimer();

// Timer function for getting the Date and Time in text
function myTimer() {
	localDate = new Date(),
	nSeconds = localDate.getSeconds(),
	nMinutes = localDate.getMinutes();
	time.innerHTML = checkAddZero(nHours) + ":" +
			checkAddZero(nMinutes) + ":" +
			checkAddZero(nSeconds);
	details.innerHTML = nDay + "    " + nDate + " " + nMonth;
    // When the day changes, get new day
	if (nSeconds == 0 && nMinutes == 0) {
		nHours = localDate.getHours(),
		nDay = dayToText(localDate.getDay()),
		nDate = localDate.getDate() + dateSupScript(nDate).sup(),
		nMonth = monthToText(localDate.getMonth());
	}
}

// Adds a zero in front of the date number if it is a single digit
function checkAddZero(number) {
	return (number < 10 ? "0" : "") + number;
}

// Returns the day of the week
function dayToText(index) {
	const dayText = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	return dayText[index];
}

// Appends a subscript to the date if required
function dateSupScript(dateValue) {
	let index = dateValue % 10; // Returns the 2nd digit of the date
    // Handles the different cases for dates
	switch (index) {
		case 1: return "st"; // Case for the date ending with 1
		case 2: return "nd"; // Case for the date ending with 2
		case 3: return "rd"; // Case for the date ending with 3
		default: return "th"; // Default case for other days of the month.
	}
}

// Converts the month to text
function monthToText(index) {
	const monthText = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	return monthText[index];
}