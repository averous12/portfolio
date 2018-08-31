var SlideIndex = 1;
function ShowImg (n) {
	var i;
	var slides= document.getElementsByClassName("slides");
	if (slides.length<n) {SlideIndex=1;}
	if (n<1) {SlideIndex=slides.length;}
	for (i=0; i<slides.length; i++) {
		slides[i].style.opacity="0";
	}
	slides[SlideIndex-1].style.opacity="1";	
}
function SwitchImg (n) {
	ShowImg(SlideIndex+=n);
}
ShowImg(SlideIndex);