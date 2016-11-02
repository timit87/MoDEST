$(window).on('scroll',function () { //скролл l-header по горизонтали
	$('.l-header').css("left", -$(this).scrollLeft() + "px");
});

$('.b-header__menu').on("click","a", function (event) {	//отменяем стандартную обработку нажатия по ссылке
	    event.preventDefault();							//забираем идентификатор бока с атрибута href
	    var id  = $(this).attr('href'),					//узнаем высоту от начала страницы до блока на который ссылается якорь
	        top = $(id).offset().top;					//анимируем переход на расстояние - top за время мс
	    $('body,html').animate({scrollTop: top}, 500);
		
});

$('.b-header__menu-item').on('click', function() {   	// клин на пункты меню header
	if(!$(this).hasClass('m-header__menu-item_active')) { 
		$('.b-header__menu-item').removeClass('m-header__menu-item_active');
		$(this).addClass('m-header__menu-item_active');	
		}
});

$('.b-header__logo').on('click', function() {			//клик на логотип, возвращает на начало страницы
	var top;
	if ($(this).hasClass('m-header__logo_click')) {
		top = 0;
		$('.b-header__menu-item').removeClass('m-header__menu-item_active');
	}
	$('html, body').animate({scrollTop: top}, 500);
	return false;
});

$('.b-content__team-content-photo').hover(function(){	//hover на блок team
	$(this).addClass('m-content__team_hover');}, function(){
		$(this).removeClass('m-content__team_hover'); 
});

$('.b-content__work-content-photo').hover(function(){	//hover на блок work
	$(this).addClass('m-content__work_hover');}, function(){
		$(this).removeClass('m-content__work_hover'); 
});

/*$('.b-content__contact-button').on('click', function() { //popup +
	   $('.b-content__contact-popup').slideDown(1500);
	return false;
});	

$('.b-content__contact-button').on('click', function() { //popup -
	   $('.b-content__contact-popup').slideUp(1500);
	return false;
});

$('.b-content__home-content-wrap').slick();*/

$('.b-content__home-content-wrap').slick({
  dots: true,
  infinite: false,
  speed: 300,
});

