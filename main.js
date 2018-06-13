// card section animations 


function scrollTop() {
	const scrolled = window.scrollY;
	if (scrolled >= 540) {
		document.body.classList.add('scroll');
	}
}

window.addEventListener('scroll', scrollTop);