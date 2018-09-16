var tasksArray = [];
var tasksPaneOpen = document.getElementById("tasksPaneOpen"),
	tasksPaneClose = document.getElementById("tasksPaneClose"),
	tasksPane = document.getElementById("tasksPane"),
	tasksHeader = document.getElementById("tasksHeader"),
	tasksList = document.getElementById("tasksList"),
	tasksFooter = document.getElementById("tasksFooter"),
	inputText = document.getElementById("inputText");

class Task {
	constructor(text) {
		this.text = text;
	}
}

tasksPaneOpen.addEventListener("mouseover", openPane);
tasksPaneClose.addEventListener("mouseover", closePane);

document.addEventListener("keypress", hitEnter);
document.getElementById("addButton").addEventListener("click", addTask);


function openPane() {
	tasksPane.style.width = "500";
	tasksHeader.style.visibility = "visible";
	tasksList.style.visibility = "visible";
	tasksFooter.style.visibility = "visible";
	tasksHeader.style.opacity = "1";
	tasksList.style.opacity = "1";
	tasksFooter.style.opacity = "1";
	inputText.focus();
	
	setTimeout( function(){
		tasksPaneClose.style.width = "70";
	}, 300);
	
	tasksArray = JSON.parse(localStorage.getItem("mywebpage.tasks"));
	if (tasksArray == null) {
		tasksArray = [];
	}
	displayTasks();
}

function closePane() {
	tasksPaneClose.style.width = "0";
	tasksHeader.style.opacity = "0";
	tasksList.style.opacity = "0";
	tasksFooter.style.opacity = "0";
	setTimeout( function(){
		tasksPane.style.width = "0";
	}, 150);
	setTimeout( function(){
		tasksHeader.style.visibility = "hidden";
		tasksList.style.visibility = "hidden";
		tasksFooter.style.visibility = "hidden";
	}, 300);
}

function addTask() {
	if (inputText.value) {
		tasksArray.push(new Task(inputText.value));
		displayTasks();
		inputText.value = "";
	}
}

function deleteTask() {
	tasksArray.splice(
			Array.prototype.indexOf.call(tasksList.children, this.parentNode), 1 );
	displayTasks();
}

function hitEnter(evt) {
	if (evt.keyCode == 13) {
		if (!evt.shiftKey) {
			addTask();
			evt.preventDefault();
		}
	}
}

function displayTasks() {
	localStorage.setItem("mywebpage.tasks", JSON.stringify(tasksArray));
	while(tasksList.firstChild) {
		tasksList.removeChild(tasksList.firstChild);
	}
	for (let i=0; i<tasksArray.length; i++) {
		let taskText = document.createElement("div");
		taskText.setAttribute("class", "taskText");
		taskText.textContent = tasksArray[i].text;
		
		let deleteButton = document.createElement("div");
		deleteButton.setAttribute("class", "deleteButton");
		deleteButton.addEventListener("click", deleteTask);
		
		let taskItem = document.createElement("div");
		taskItem.setAttribute("class", "task");
		taskItem.appendChild(taskText);
		taskItem.appendChild(deleteButton);
		tasksList.appendChild(taskItem);
	}
}