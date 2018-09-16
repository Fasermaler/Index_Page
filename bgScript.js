var bgMain = document.getElementById("bgMainLayer");
var bgFade = document.getElementById("bgFadeLayer");
var curIndex = 1,
	newIndex = 1;

// Number of images
const noOfImages = 13;

bgMain.style.opacity = 1;
bgFade.style.opacity = 0;

// Randoms the image out of the entire pool of images
newIndex = Math.floor(Math.random() * noOfImages) + 1;
bgMain.style.backgroundImage = "url(res/bg/"+newIndex+".jpg)";
curIndex = newIndex;

// Changes the image once every 10s
setInterval(changeImage, 10000);

function changeImage() {
    // If there is only 1 image then this function will not do anything
	if(noOfImages==1) {
		return;
	}
    // If the newly randomed image is the same as the current one, random again
	while(newIndex == curIndex) {
		newIndex = Math.floor(Math.random() * noOfImages) + 1;
	}
    
	bgFade.style.backgroundImage = "url(res/bg/"+newIndex+".jpg)";
	bgFade.classList.add("fadeInLayer");
	console.log("test1");
	setTimeout(function() {
		bgMain.style.backgroundImage = "url(res/bg/"+newIndex+".jpg)";
		bgFade.classList.remove("fadeInLayer");
		console.log("test2");
	}, 3000);
	
	curIndex = newIndex;
}