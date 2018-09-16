
var cyberpunkArray = [];
var cyberpunkPane = document.getElementById("cyberpunkPane");

class cyberpunk {
	constructor(title, href, icon) {
		this.title = title;
		this.href = href;
		this.icon = icon;
	}
}


cyberpunkArray.push(new Link("cyberpunk_reddit", "https://www.reddit.com/r/cyberpunk/", "res/edgeIcons/reddit_cyberpunk.png", false));

cyberpunkArray.push(new Link("cyberpunkgame_reddit", "https://www.reddit.com/r/cyberpunkgame/", "res/edgeIcons/reddit_cyberpunkgame.png", false));

cyberpunkArray.push(new Link("Think_geek", "https://www.thinkgeek.com/", "res/edgeIcons/think_geek.png", false));


cyberpunkPane.style.width = cyberpunkArray.length * 80 + 5;

for (let i=0; i<cyberpunkArray.length; i++) {
	let icon = document.createElement("div");
	icon.setAttribute("class", "cyberpunkIcon");
	icon.setAttribute("title", cyberpunkArray[i].title);
	icon.setAttribute("alt", cyberpunkArray[i].title);
	icon.style.backgroundImage = "url("+cyberpunkArray[i].icon+")";
	
	let a = document.createElement("a");
	a.href = cyberpunkArray[i].href;
	a.setAttribute("target","_blank");
	a.appendChild(icon);
	cyberpunkPane.appendChild(a);
}