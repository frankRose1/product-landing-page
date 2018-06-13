$(document).ready(function(){

//card animations
function scrollDistance() {
	const scrolled = window.scrollY;
	if (scrolled >= 540) {
		document.body.classList.add('scroll');
	}
}

window.addEventListener('scroll', scrollDistance);

$('a').on('click', function(e){
	e.preventDefault();
	const target = $(this.hash);
	if(target.length > 0){
		$('html, body').stop().animate({
		scrollTop: target.offset().top - 10
		}, 500);
	}
});

}); //end doc ready
