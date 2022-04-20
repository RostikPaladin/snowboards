let offset1 = 0; // cмещение от левого края
const sliderLine = document.querySelector('.slider-line');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

btnNext.addEventListener('click', function(){
	offset1 += 340;
	if (offset1 > 680) {
		offset1 = 680;
	}
	sliderLine.style.left = -offset1 + "px";
});

btnPrev.addEventListener('click', function(){
	offset1 -= 340;
	if (offset1 < -680) {
		offset1 = -680;
	}
	sliderLine.style.left = -offset1 + "px";
});
// Анимация заголовка
let btn = document.querySelector('.btn'); 
let moveLeftSecondSign = document.querySelector('.move-left-second-sign'); 
let moveRightSecondSign = document.querySelector('.move-right-second-sign');
let moveLeftFirstSign = document.querySelector('.move-left-first-sign'); 
let moveRightFirstSign = document.querySelector('.move-right-first-sign');
const animItems = document.querySelectorAll('._anim-items');

 if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (var index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('_active');

			} else {

				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
			if (animItems[1].classList.contains('_active')) {
			setTimeout(() => {
	btn.classList.remove('delay');
	}, 100);
		}
			if (animItems[6].classList.contains('_active')) {
			setTimeout(() => {
	moveLeftSecondSign.classList.remove('delay-edge-sign');
	moveRightSecondSign.classList.remove('delay-edge-sign');
	moveLeftFirstSign.classList.remove('delay-middle-sign');
	moveRightFirstSign.classList.remove('delay-middle-sign');
	}, 800);
		}
			
	  }
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }	
	}

	setTimeout(() => {
		animOnScroll();
	}, 400);
}