var mouseCnvs = document.getElementById("mouseCanvas");
mouseCnvs.height = innerHeight;
mouseCnvs.width = innerWidth;
var mouseCtx = mouseCnvs.getContext("2d");
var mousePos;
var circleGrad;

var scrn = document.getElementById("scrn");
var particleGrad;
const noOfParticles = 15,
	  particleSpeed = 10;

var bg = document.getElementById("bgImage");
var bgFade = document.getElementById("bgFadeLayer");
var bgMain = document.getElementById("bgMainLayer");
const parallexFactorX = 1.02,
	  parallexFactorY = 1.04;
bgFade.style.width = 100*parallexFactorX + "%";
bgFade.style.height = 100*parallexFactorY +"%";
bgMain.style.width = 100*parallexFactorX + "%";
bgMain.style.height = 100*parallexFactorY +"%";


class Particle {
	
	constructor(x,y) {
		this.x = x;
		this.y = y;
		this.r = 5 + Math.floor(Math.random() * 8);
		this.fade = 0.3 + Math.floor(Math.random() * 6) / 10.0;
		this.angle = Math.random() * 2 * Math.PI;
		this.isVisible = true;
	}
	
	moveParticle() {
		this.x += Math.sin(this.angle) * particleSpeed;
		this.y += Math.cos(this.angle) * particleSpeed;
		if (this.fade > 0) {
			this.fade -= 0.05;
		} else {
			this.isVisible = false;
		}
	}
}


window.addEventListener('mousemove', function(evt) {
	mousePos = getMousePos(evt);
	circleGrad = mouseCtx.createRadialGradient(
			mousePos.x, mousePos.y, 0, mousePos.x, mousePos.y, 1539 );
	circleGrad.addColorStop(0, "rgba(200,100,50,0.05)");
	circleGrad.addColorStop(1, "rgba(80,25,10,0.2)");
	mouseCtx.clearRect(0, 0, mouseCnvs.width, mouseCnvs.height);
	mouseCtx.fillStyle = circleGrad;
	mouseCtx.fillRect(0, 0, mouseCnvs.width, mouseCnvs.height);
	
	/* moveBackground(bgMain);
	moveBackground(bgFade); */
}, false);

window.addEventListener('mousedown', particlesExplode);

function getMousePos(evt) {
	return {
		x: evt.clientX,
		y: evt.clientY
	};
}

/* function moveBackground(imageLayer) {
	imageLayer.style.backgroundPositionX = -(innerWidth * (parallexFactorX - 1))
			* mousePos.x / innerWidth + "px";
	imageLayer.style.backgroundPositionY = -(innerHeight * (parallexFactorY - 1))
			* mousePos.y / innerHeight - 50 + "px";
} */

function particlesExplode(evt) {
	var cnvs = document.createElement("canvas");
	scrn.appendChild(cnvs);
	cnvs.style.position = "fixed";
	cnvs.height = 300;
	cnvs.width = 300;
	cnvs.style.top = evt.clientY - 150;
	cnvs.style.left = evt.clientX - 150;
	var cnvsCtx = cnvs.getContext("2d");
	
	let pArray = [];
	for (let i=0; i<noOfParticles; i++) {
		pArray[i] = new Particle(150, 150);
	}
		
	var timer = setInterval(function() {
		cnvsCtx.clearRect(
				1, 1, cnvs.width, cnvs.height);
		for (let i=0; i<noOfParticles; i++) {
			pArray[i].moveParticle();
			particleGrad = cnvsCtx.createRadialGradient(
					pArray[i].x, pArray[i].y, 0,
					pArray[i].x, pArray[i].y, pArray[i].r);
			particleGrad.addColorStop(
					0, "rgba(255,255,255,"+pArray[i].fade+")");
			particleGrad.addColorStop(
					1, "rgba(255,255,255,0)");
			cnvsCtx.fillStyle = particleGrad;
			cnvsCtx.fillRect(
					0,0,cnvs.width,cnvs.height);
		}
		for (let i=0; i<noOfParticles; i++) {
			if (pArray[i].isVisible) {
				break;
			} else if (i == noOfParticles - 1) {
				clearInterval(timer);
				scrn.removeChild(cnvs);
			}
		}
	}, 25);
	
}

/*function particlesExplode(evt) {
	let pArray = [];
	for (let i=0; i<noOfParticles; i++) {
		pArray[i] = new Particle(evt.clientX, evt.clientY);
	}
		
	var timer = setInterval(function () {
		mouseClickCtx.clearRect(
				0, 0, mouseClickCnvs.width, mouseClickCnvs.height);
		for (let i=0; i<noOfParticles; i++) {
			pArray[i].moveParticle();
			particleGrad = mouseClickCtx.createRadialGradient(
					pArray[i].x, pArray[i].y, 0,
					pArray[i].x, pArray[i].y, pArray[i].r);
			particleGrad.addColorStop(
					0, "rgba(210,190,240,"+pArray[i].fade+")");
			particleGrad.addColorStop(
					1, "rgba(210,190,240,0)");
			mouseClickCtx.fillStyle = particleGrad;
			mouseClickCtx.fillRect(
					0,0,mouseClickCnvs.width,mouseClickCnvs.height);
		}
		for (let i=0; i<noOfParticles; i++) {
			if (pArray[i].isVisible) {
				break;
			} else if (i == noOfParticles - 1) {
				clearInterval(timer);
			}
		}
	}, 25);
	
}*/