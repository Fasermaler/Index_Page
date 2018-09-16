var SUTDArray = [];
var SUTDPane = document.getElementById("SUTDPane");

class SUTD {
	constructor(title, href, icon) {
		this.title = title;
		this.href = href;
		this.icon = icon;
	}
}


SUTDArray.push(new Link("MyPortal", "https://myportal.sutd.edu.sg", "res/SUTDIcons/SUTD_my_portal.png", false));

SUTDArray.push(new Link("MyMail", "https://outlook.office365.com/owa/", "res/SUTDIcons/SUTD_mymail.png", false));

SUTDArray.push(new Link("Map", "https://sutdmap.appspot.com/", "res/SUTDIcons/SUTD_map.png", false));

SUTDArray.push(new Link("E-dimension", "https://edimension.sutd.edu.sg", "res/SUTDIcons/SUTD_edim.png", false));

SUTDArray.push(new Link("Library", "https://mylibrary.sutd.edu.sg/", "res/SUTDIcons/SUTD_library.png", false));

SUTDArray.push(new Link("Herokuapp", "http://sutd-timetable.herokuapp.com/", "res/SUTDIcons/SUTD_herokuapp.png"));


SUTDPane.style.width = SUTDArray.length * 120 + 10;

for (let i=0; i<SUTDArray.length; i++) {
	let icon = document.createElement("div");
	icon.setAttribute("class", "SUTDIcon");
	icon.setAttribute("title", SUTDArray[i].title);
	icon.setAttribute("alt", SUTDArray[i].title);
	icon.style.backgroundImage = "url("+SUTDArray[i].icon+")";
	
	let a = document.createElement("a");
	a.href = SUTDArray[i].href;
	a.setAttribute("target","_blank");
	a.appendChild(icon);
	SUTDPane.appendChild(a);
}
