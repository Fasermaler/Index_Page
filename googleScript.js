var GoogleArray = [];
var GooglePane = document.getElementById("GooglePane");

class Google {
	constructor(title, href, icon) {
		this.title = title;
		this.href = href;
		this.icon = icon;
	}
}


GoogleArray.push(new Link("Maps", "https://www.google.com/maps", "res/googleIcons/map.png", false));

GoogleArray.push(new Link("Drive", "https://drive.google.com/drive/my-drive", "res/googleIcons/drive.png", false));

GoogleArray.push(new Link("Onedrive", "https://onedrive.live.com/about/en-sg/", "res/googleIcons/onedrive.png", false));

GoogleArray.push(new Link("Office", "https://www.office.com/", "res/googleIcons/office.png", false));



GooglePane.style.width = GoogleArray.length * 70 + 10;

for (let i=0; i<GoogleArray.length; i++) {
	let icon = document.createElement("div");
	icon.setAttribute("class", "GoogleIcon");
	icon.setAttribute("title", GoogleArray[i].title);
	icon.setAttribute("alt", GoogleArray[i].title);
	icon.style.backgroundImage = "url("+GoogleArray[i].icon+")";
	
	let a = document.createElement("a");
	a.href = GoogleArray[i].href;
	a.setAttribute("target","_blank");
	a.appendChild(icon);
	GooglePane.appendChild(a);
}
