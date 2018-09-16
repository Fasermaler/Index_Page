var animCnvs = document.getElementById("animationCanvas");
var animCtx = animCnvs.getContext("2d");
var pulseGrad;
var d = 100;

animCnvs.height = innerHeight;
animCnvs.width = innerWidth;
setInterval(pulse, 25);

function pulse() {
	pulseGrad = animCtx.createRadialGradient(
			animCnvs.width/2, animCnvs.height/2-100, d+100,
			animCnvs.width/2, animCnvs.height/2-100, d+200);
	pulseGrad.addColorStop(0, "rgba(210,190,240,0");
	pulseGrad.addColorStop(0.5, "rgba(210,190,240,"+0.25*(150-d)/400+")");
	pulseGrad.addColorStop(1, "rgba(210,190,240,0");
	animCtx.clearRect(0, 0, animCnvs.width, animCnvs.height);
	animCtx.fillStyle = pulseGrad;
	animCtx.fillRect(0, 0, animCnvs.width, animCnvs.height);
	d+=15;
	if( d >= 600 ) {
		d = 0;
	}
}

