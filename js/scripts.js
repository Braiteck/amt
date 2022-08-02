$(() => {
	// Ширина окна для ресайза
	WW = $(window).width()


	// Основной слайдер на главной
	if ($('.main_slider .swiper').length) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			}
		})
	}


	// История
	const historySliders = []

	$('.history .swiper').each(function (i) {
		$(this).addClass('history_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			spaceBetween: 0,
			slidesPerView: 'auto'
		}

		historySliders.push(new Swiper('.history_s' + i, options))
	})


	// Видеообзоры продукции
	const videoReviewsSliders = []

	$('.video_reviews .swiper').each(function (i) {
		$(this).addClass('video_reviews_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 40,
					slidesPerView: 3
				},
				1600: {
					spaceBetween: 50,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => $(swiper.$el).find('.swiper-slide-duplicate a').removeAttr('data-fancybox')
			}
		}

		videoReviewsSliders.push(new Swiper('.video_reviews_s' + i, options))
	})


	// Новости
	const articlesSliders = []

	$('.articles .swiper').each(function (i) {
		$(this).addClass('articles_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 40,
					slidesPerView: 4
				},
				1600: {
					spaceBetween: 50,
					slidesPerView: 4
				}
			}
		}

		articlesSliders.push(new Swiper('.articles_s' + i, options))
	})


	// Область применения
	const appAreaSliders = []

	$('.app_area .swiper').each(function (i) {
		$(this).addClass('app_area_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1280: {
					spaceBetween: 40,
					slidesPerView: 2
				},
				1600: {
					spaceBetween: 50,
					slidesPerView: 2
				}
			}
		}

		appAreaSliders.push(new Swiper('.app_area_s' + i, options))
	})


	// Конфигуратор
	if ($('.config .image .swiper').length) {
		new Swiper('.config .image .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			on: {
				init: swiper => $(swiper.$el).find('.swiper-slide-duplicate a').removeAttr('data-fancybox')
			}
		})
	}


	// Область применения
	$('.app_area .load_more .btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.app_area')

		$(this).toggleClass('active')
		parent.find('.hide').slideToggle(300)
	})


	// Мини всплывающие окна
	$('.mini_modal_btn').click(function (e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Закрываем всплывашку при клике за её пределами
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})

	// Закрываем всплывашку при клике на крестик во всплывашке
	$('.mini_modal .close_btn').click(e => {
		$('.mini_modal, .mini_modal_btn').removeClass('active')

		if (is_touch_device()) $('body').css('cursor', 'default')
	})


	// Поиск
	$('.search .input').keydown(function () {
		let _self = $(this)

		_self.val().length
			? _self.addClass('active')
			: _self.removeClass('active')
	})

	$('.search form').on('reset', function () {
		$(this).find('.input').removeClass('active')
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	Fancybox.defaults.template = {
		closeButton: '<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>',
		spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
		main: null
	}

	// Увеличение картинки
	Fancybox.bind('.fancy_img, .swiper-slide:not(.swiper-slide-duplicate) .fancy_slider', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	$(document).on('click', '.swiper-slide-duplicate a.fancy_slider', function (e) {
		e.preventDefault()

		let thisSlideIndes = $(this).closest('.swiper-slide-duplicate').data('swiper-slide-index')

		$(this).closest('.swiper-wrapper').find('.swiper-slide:not(.swiper-slide-duplicate)[data-swiper-slide-index="' + thisSlideIndes + '"] a.fancy_slider')[0].click()
	})


	// Всплывающие окна
	$('body').on('click', '.modal_btn', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: $(this).data('modal'),
			type: 'inline'
		}])
	})


	// Табы
	$('body').on('click', '.tabs button', function (e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			const $parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				$activeTabContent = $(activeTab),
				level = $(this).data('level')

			$parent.find('.tabs:first button').removeClass('active')
			$parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			$activeTabContent.addClass('active')
		}
	})


	// Аккордион
	$('body').on('click', '.accordion .accordion_item .head', function (e) {
		e.preventDefault()

		const $item = $(this).closest('.accordion_item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.accordion_item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Моб. меню
	$('header .menu_btn').click((e) => {
		e.preventDefault()

		$('header .menu_btn').toggleClass('active')
		$('body').toggleClass('menu_open')
		$('header .menu').toggleClass('show')
	})


	// Маска ввода
	$('input[type=tel]').inputmask('+7 (999) 999-99-99', {
		showMaskOnHover: false,
	})

	// Кастомный select
	$('select').niceSelect()

	// Label на полях ввода
	$('.form .input, .form textarea').keydown(function () {
		let _self = $(this)

		setTimeout(() => {
			_self.val().length
				? $(this).addClass('active')
				: $(this).removeClass('active')
		})
	})

	$('.form select').change(function () {
		let _self = $(this)

		setTimeout(() => {
			_self.val().length
				? $(this).addClass('active')
				: $(this).removeClass('active')
		})
	})

	// Сброс формы
	$('.form').on('reset', function () {
		setTimeout(() => {
			$(this).find('select').removeClass('active').niceSelect('update')
		})
	})

	// Выбор файла
	$('body').on('change', '.form input[type=file]', function () {
		$(this).closest('.file').find('label').addClass('active')
		$(this).closest('.file').find('label .path').text($(this).val())
	})


	if (is_touch_device()) {
		// Закрытие моб. меню свайпом справо на лево
		let ts

		$('body').on('touchstart', (e) => { ts = e.originalEvent.touches[0].clientX })

		$('body').on('touchend', (e) => {
			let te = e.originalEvent.changedTouches[0].clientX

			if ($('body').hasClass('menu_open') && ts > te + 50) {
				// Свайп справо на лево
			} else if (ts < te - 50) {
				// Свайп слева на право
				$('header .menu_btn').removeClass('active')
				$('body').removeClass('menu_open')
				$('header .menu').removeClass('show')
			}
		})
	}
})



$(window).on('resize', () => {
	if (typeof WW !== 'undefined' && WW != $(window).width()) {
		// Моб. версия
		if (!firstResize) {
			$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
			if ($(window).width() < 375) $('meta[name=viewport]').attr('content', 'width=375, user-scalable=no')

			firstResize = true
		} else {
			firstResize = false
		}


		// Перезапись ширины окна
		WW = $(window).width()
	}
})