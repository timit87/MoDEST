$(window).on('scroll',function () { //скролл l-header по горизонтали
	$('.l-header').css("left", -$(this).scrollLeft() + "px");
});

$('.b-header').on('click','a', function () { // отслеживаем клик на все теги <a> внутри блока .b-header
	var $this = $(this), // просто так удобнее, как хорошая привычка, в данном случае не обязательно
		top;
	//$('.b-header__menu-item').removeClass('m-header__menu-item_active'); // удаляем модификатор active со всех пунктов меню (см. коментарий под этим примером)
	
	if ($this.hasClass('b-header__logo')) { // клик на логотип
		top = 0;
	} else { // клик на остальные ссылки
	//	$this.addClass('m-header__menu-item_active');  // добавляем модификатор active на кликнутый пункт меню (см. коментарий под этим примером)
		top = $($this.attr('href')).offset().top; // так же как у тебя в скрипте получаю расстояние до элемента, только объединил 2 строки в одну (необязательно)
	}
	$('body,html').animate({scrollTop: top}, 200); // скролл не менял
	
	return false; // отмена поведения кликнутой ссылки по умолчанию, найди и перечитай мое письмо по поводу return false, prevendDefault и stopPropagation, т.к. ты их испольуешь, но разницы не понимаешь
});

$(window).on('scroll',function () {
	
	var topabout=$("#about").offset().top, 
		topteam=$("#team").offset().top, 
		topwork=$("#work").offset().top, 
		topservice=$("#service").offset().top,
		topfeatures=$("#features").offset().top,
		topcontact=$("#contact").offset().top;
	
	$('.b-header__menu-item').removeClass('m-header__menu-item_active');
	
	if (window.scrollY < 10 ) {
		$('.m-header__menu-item_home').removeClass('m-header__menu-item_active');
	} else if (window.scrollY < topabout-250) {
		$('.m-header__menu-item_home').addClass('m-header__menu-item_active');
	} else if (window.scrollY < topteam-250) {
		$('.m-header__menu-item_about').addClass('m-header__menu-item_active');
	} else if (window.scrollY < topwork-250){
		$('.m-header__menu-item_team').addClass('m-header__menu-item_active');
	} else if (window.scrollY < topservice-250) {
		$('.m-header__menu-item_work').addClass('m-header__menu-item_active');
	} else if (window.scrollY < topfeatures-250) {
		$('.m-header__menu-item_service').addClass('m-header__menu-item_active');
	} else if (window.scrollY < topcontact-250) {
		$('.m-header__menu-item_features').addClass('m-header__menu-item_active');
	} else if (window.scrollY > topcontact-250) {
		$('.m-header__menu-item_contact').addClass('m-header__menu-item_active');
	}
});


$('.b-content__home-content-wrap').slick({
  dots: true,
  infinite: false,
  speed: 300,
});
	
$(document).ready(function() {
	$('a.fancybox-work').fancybox({
		minHeight : 700
	});
	
	$('a.fancybox-features').fancybox({
		padding: 10,

		openEffect : 'elastic',
		openSpeed  : 300,

		closeEffect : 'fade',
		closeSpeed  : 300,

		closeClick : true,
		
		closeBtn : false,
		
		minHeight : 700,
		
		openOpacity : true,
		
		helpers : {
			overlay : {
				closeClick : false
			}
		}
	});
	
	$('a.fancybox-popup').fancybox({
		minWidth : 650,
		padding : 10,
		
		helpers : {
			overlay : {
				closeClick : false
			}
		}
	});
	
});


