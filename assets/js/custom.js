(function ($) {
	
	"use strict";

	// Современная анимация загрузки страницы
	$(window).on('load', function() {
        $('#js-preloader').addClass('loaded');
        
        // Анимация появления элементов при загрузке
        $('.properties .item').each(function(index) {
            $(this).css('opacity', '0').delay(index * 100).animate({
                'opacity': '1'
            }, 600);
        });
        
        $('.featured .info-table').css('opacity', '0').animate({
            'opacity': '1'
        }, 800);
    });

	// Улучшенный скролл с плавными переходами
	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.header-text').height();
	  var header = $('header').height();

	  if (scroll >= box - header) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	  
	  // Анимация счетчиков при скролле
	  $('.counter').each(function() {
	      var $this = $(this);
	      var countTo = $this.attr('data-to');
	      
	      if ($this.offset().top < $(window).scrollTop() + $(window).height() - 100) {
	          $({ countNum: $this.text() }).animate({
	              countNum: countTo
	          }, {
	              duration: 2000,
	              easing: 'swing',
	              step: function() {
	                  $this.text(Math.floor(this.countNum));
	              },
	              complete: function() {
	                  $this.text(this.countNum);
	              }
	          });
	      }
	  });
	})

	// Улучшенная карусель с современными настройками
	$('.owl-banner').owlCarousel({
	  center: true,
      items:1,
      loop:true,
      nav: true,
	  dots:true,
	  navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      margin:30,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      responsive:{
        992:{
            items:1
        },
		1200:{
			items:1
		}
      }
	});

	// Адаптивность с улучшенной логикой
	var width = $(window).width();
		$(window).resize(function() {
		if (width > 767 && $(window).width() < 767) {
			location.reload();
		}
		else if (width < 767 && $(window).width() > 767) {
			location.reload();
		}
	})

	// Улучшенная фильтрация недвижимости
	const elem = document.querySelector('.properties-box');
	const filtersElem = document.querySelector('.properties-filter');
	if (elem) {
		const rdn_events_list = new Isotope(elem, {
			itemSelector: '.properties-items',
			layoutMode: 'masonry',
			transitionDuration: '0.6s'
		});
		if (filtersElem) {
			filtersElem.addEventListener('click', function(event) {
				if (!matchesSelector(event.target, 'a')) {
					return;
				}
				const filterValue = event.target.getAttribute('data-filter');
				rdn_events_list.arrange({
					filter: filterValue
				});
				filtersElem.querySelector('.is_active').classList.remove('is_active');
				event.target.classList.add('is_active');
				event.preventDefault();
			});
		}
	}

	// Современное мобильное меню
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(300);
		});
	}

	// Плавная прокрутка с улучшенной анимацией
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 800, 'easeInOutQuart');
				return false;
			}
		}
	});

	// Улучшенная форма контактов
	$('#contact-form').on('submit', function(e) {
		e.preventDefault();
		
		var form = $(this);
		var submitBtn = form.find('button[type="submit"]');
		var originalText = submitBtn.text();
		
		// Анимация загрузки
		submitBtn.text('Отправляем...').prop('disabled', true);
		
		// Имитация отправки (замените на реальную отправку)
		setTimeout(function() {
			submitBtn.text('Отправлено!').removeClass('btn-primary').addClass('btn-success');
			
			setTimeout(function() {
				submitBtn.text(originalText).removeClass('btn-success').addClass('btn-primary').prop('disabled', false);
				form[0].reset();
			}, 2000);
		}, 1500);
	});

	// Анимация при наведении на карточки недвижимости
	$('.properties .item').hover(
		function() {
			$(this).find('img').addClass('zoom-in');
		},
		function() {
			$(this).find('img').removeClass('zoom-in');
		}
	);

	// Современные эффекты для кнопок
	$('.main-button a, .icon-button a').hover(
		function() {
			$(this).addClass('pulse');
		},
		function() {
			$(this).removeClass('pulse');
		}
	);

})(window.jQuery);