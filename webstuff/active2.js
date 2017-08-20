var imgs = new Array();
var cols = new Array("lambo2","lambo");
var curImg;
var willRot

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
document.addEventListener("mousedown",Ifrotate);
document.addEventListener("mouseup",Ifrotate2)

function Ifrotate(event) {
	willRot = 1;
}

function Ifrotate2(event) {
	willRot = 0;
}

function Im(event) {
	if (willRot == 1) {
		for (var getImg = 0; getImg < imgs.length; getImg++){
			if (getImg * 2 + 400 > event.clientX && getImg * 2 + 400 - 2 < event.clientX) {
				img = imgs[getImg]
				return;
			}
		}
		document.getElementById("screen").src = img;
	}
}