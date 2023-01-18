document.getElementById('main').hidden = true;

var vid = document.getElementById('video');

document.addEventListener('click', function () {
	document.getElementById('enter').hidden = true;

	document.getElementById('main').hidden = false;

	if (typeof window.orientation == 'undefined') { 
		vid.play();
	}
});

vid.onended = function () {
	vid.play();
};