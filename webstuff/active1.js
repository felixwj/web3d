var imgs = new Array();
var cols = new Array("lambo2","lambo");
var curImg;

for (var setIm = 0; setIm < 241; setIm++) {
	imgs[setIm] = "assets/lambo/lamborghini."+setIm+".jpg";
}

function loadC(color) {
	document.getElementById("screen").src = imgs[curImg];
	for (var setIm = 0; setIm < 241; setIm++) {
		imgs[setIm] = "assets/"+cols[color]+"/lamborghini."+setIm+".jpg";
	}
}

document.addEventListener("mousemove",Im);

function Im(event) {
	for (var getImg = 0; getImg < imgs.length; getImg++){
		if (getImg * 2 > event.clientX && getImg * 2 - 2 < event.clientX) {
			img = imgs[getImg]
			curImg = getImg;
			return;
		}
	}
	document.getElementById("screen").src = img;
}