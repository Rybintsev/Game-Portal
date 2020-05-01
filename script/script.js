$(document).ready(function() {

	$('#Burger').on('click', function() {
		$('#Burger,.menu__list').toggleClass('show-menu');
		$('body').toggleClass('lock');
	});

	$('.js-tab-trigger').on('click', function () {
		var tabName = $(this).data('tab'),
			tab = $('.js-tab-content[data-tab="'+tabName+'"]');

		$('.js-tab-trigger.activ').removeClass('activ');
		$(this).addClass('activ');

		$('.js-tab-content.activ').removeClass('activ');
		tab.addClass('activ');
	});

	$('.team__slider').slick({
		arrows:false, //стрелки
		dots:false, //кнопки
		slidesToShow:4, //количнство слайдов
		slidesToScroll:1, //количество пролистываемых стайдов
		speed:1300, //скорость пролистывания
		easing:'ease', //анимация пролистывания
		infinite:true, //бесконечная прокрутка
		autoplay:true, //автоматическая прокрутка слайдов
		autoplaySpeed:1200, //скорость авто-пролистывания
		pauseOnHover:true, //пауза при наведении на слайдер
		draggable:true, //пролистывание мышкой(не тачскрин)
		swipe:true, //пролистывание пальцем(тачскрин)
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow:3,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow:2,
				}
			},
			{
				breakpoint: 375,
				settings: {
					slidesToShow:1,
				}
			}
		]
	});

	$('.blog__tabs_link').on('click', function () {
		var tabName = $(this).data('blog'),
			tab = $('.blog__tabs_block[data-blog="'+tabName+'"]');

		$('.blog__tabs_link.activ-blog').removeClass('activ-blog');
		$(this).addClass('activ-blog');

		$('.blog__tabs_block.activ-blog').removeClass('activ-blog');
		tab.addClass('activ-blog');
	});

	$("a").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({ scrollTop: destination }, 900);
		return false;
	});
});

