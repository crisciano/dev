$(function() {
    var swiper = new Swiper('#slideDepoimentos', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        speed: 300,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });

    var galleryTop = new Swiper('#gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
    });
    var galleryThumbs = new Swiper('#gallery-thumbs', {
        // spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
});