var bmArray = [];
var bmPane = document.getElementById("bmPane");

class Bookmark {
	constructor(title, href) {
		this.title = title;
		this.href = href;
	}
}


bmArray.push(new Bookmark("ME Recommended Modules", "http://me.nus.edu.sg/wp-content/uploads/2018/06/Sample-schedule_25Jun2018_AY1718onwards.pdf",false));

bmArray.push(new Bookmark("ME+IDP Recommended Modules", "http://www.eng.nus.edu.sg/edic/documents/MPE_ID2maj_2017.pdf",false));

bmArray.push(new Bookmark("CS Minor", "https://www.comp.nus.edu.sg/programmes/ug/minorc/cs-minor/",false));


bmPane.style.height = bmArray.length * 20;


for (let i=0; i<bmArray.length; i++) {
	let a = document.createElement("a");
	a.href = bmArray[i].href;
	a.title = bmArray[i].title;
	a.innerHTML = bmArray[i].title;
	a.setAttribute("target","_blank");
	bmPane.appendChild(a);
    
}
