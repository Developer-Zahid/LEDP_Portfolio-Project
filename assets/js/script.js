//=========Fixed Menu js=========//
window.addEventListener('scroll', ()=>{
    let header = document.querySelector(".header");
    let scroll = this.scrollY;
    if(scroll > 100){
        header.classList.add('header--bg');
    }else{
        header.classList.remove('header--bg');
    }
});

//=========Feedback Slider js=========//
$(".feedback__slider").slick({
	dots: true,
	speed: 500,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: true,
	autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false
});