
var linksArray = [];
var linksPane = document.getElementById("linksPane");

class Link {
	constructor(title, href, icon) {
		this.title = title;
		this.href = href;
		this.icon = icon;
	}
}


linksArray.push(new Link("Facebook", "https://www.facebook.com", "res/linksIcons/facebook.png", false));

linksArray.push(new Link("Youtube", "https://www.youtube.com", "res/linksIcons/youtube.png", false));

linksArray.push(new Link("Whatsapp", "https://web.whatsapp.com/", "res/linksIcons/whatsapp.png", false));

linksArray.push(new Link("Protonmail", "https://mail.protonmail.com/login", "res/linksIcons/protonmail.png", false));

linksArray.push(new Link("Linkedin", "https://www.linkedin.com", "res/linksIcons/linkedin.png", true));

linksArray.push(new Link("Reddit", "https://www.reddit.com/", "res/linksIcons/reddit.png", false));

linksPane.style.width = linksArray.length * 80;

for (let i=0; i<linksArray.length; i++) {
	let icon = document.createElement("div");
	icon.setAttribute("class", "linksIcon");
	icon.setAttribute("title", linksArray[i].title);
	icon.setAttribute("alt", linksArray[i].title);
	icon.style.backgroundImage = "url("+linksArray[i].icon+")";
	
	let a = document.createElement("a");
	a.href = linksArray[i].href;
	a.setAttribute("target","_blank");
	a.appendChild(icon);
	linksPane.appendChild(a);
}
