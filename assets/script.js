const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

let currentSlide = 0;

const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

slides.forEach((_, index) => {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	if (index === 0) dot.classList.add('dot_selected');
	dot.dataset.index = index;
	dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateCarousel() {
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
	bannerText.innerHTML = slides[currentSlide].tagLine;

	dots.forEach((dot, index) => {
		dot.classList.toggle('dot_selected', index === currentSlide);
	});
}

function goToSlide(index) {
	currentSlide = index;
	updateCarousel();
}

arrowLeft.addEventListener('click', () => {
	currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
	updateCarousel();
});

arrowRight.addEventListener('click', () => {
	currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
	updateCarousel();
});
