// スマホメニュー
// $('.spMenuBtn').on('click', function () {
// 	$('body').toggleClass('spMenuShow');
// });

// SP.MENUアコーディオン
// $('.gnav .parent').on('click',function(){
//   $(this).toggleClass('open');
//   $(this).next('.child').slideToggle();
//   return false;
// });

$('.acBtn').on('click', function () {
	$(this).next('.acContent').slideToggle();
	$(this).toggleClass('acOpen');
});

$('.spAcBtn').on('click', function () {
	if (window.innerWidth < 768) {
		$(this).next('.spAcContent').slideToggle();
		$(this).toggleClass('spAcOpen');
	}
});

$('.acBtn02').on('click', function () {
	$(this).next('.acContent').slideToggle();
	$(this).parent().toggleClass('acOpen');
});

//　SP検索窓
// $('.sBtn').on('click',function(){
//   $('body').toggleClass('searchShow');
// });
// $(window).on('scroll',function(){
//   $('body').removeClass('searchShow');
// });

// タブ
$('.tabBtn li').on('click', function () {
	var obj = $(this).index();
	$(this).parent('.tabBtn').children('li').removeClass('current');
	$(this).addClass('current');
	$('.tabContent .tabItem').css({
		display: 'none'
	}).eq(obj).fadeIn();
});


var moreNum01 = 6;
$('.moreContents.moreMod01 .moreItem:nth-child(n + ' + (moreNum01 + 1) + ')').addClass('is-hidden');
$('.moreBtn01').on('click', function () {
	$('.moreContents.moreMod01 .moreItem.is-hidden').slice(0, moreNum01).removeClass('is-hidden');
	if ($('.moreContents.moreMod01 .moreItem.is-hidden').length == 0) {
		$('.moreBtn01').fadeOut();
	}
});

var moreNum02 = 8;
$('.moreContents.moreMod02 .moreItem:nth-child(n + ' + (moreNum02 + 1) + ')').addClass('is-hidden');
$('.moreBtn02').on('click', function () {
	$('.moreContents.moreMod02 .moreItem.is-hidden').slice(0, moreNum02).removeClass('is-hidden');
	if ($('.moreContents.moreMod02 .moreItem.is-hidden').length == 0) {
		$('.moreBtn02').fadeOut();
	}
});

var moreNum03 = 10;
$('.moreContents.moreMod03 .moreItem:nth-child(n + ' + (moreNum03 + 1) + ')').addClass('is-hidden');
$('.moreBtn03').on('click', function () {
	$('.moreContents.moreMod03 .moreItem.is-hidden').slice(0, moreNum03).removeClass('is-hidden');
	if ($('.moreContents.moreMod03 .moreItem.is-hidden').length == 0) {
		$('.moreBtn03').fadeOut();
	}
});

var moreNum04 = 20;
$('.moreContents.moreMod04 .moreItem:nth-child(n + ' + (moreNum04 + 1) + ')').addClass('is-hidden');
$('.moreBtn04').on('click', function () {
	$('.moreContents.moreMod04 .moreItem.is-hidden').slice(0, moreNum04).removeClass('is-hidden');
	if ($('.moreContents.moreMod04 .moreItem.is-hidden').length == 0) {
		$('.moreBtn04').fadeOut();
	}
});

//SPローカルナビ
$('.localNav .navItem').on('click', function () {
	$(this).parent('.spAcContent').children('.navItem').removeClass('current');
	$(this).addClass('current');
	$(this).parent().prev('.spAcBtn').html($(this).html());
	$(this).parent().prev('.spAcBtn').removeClass('spAcOpen');
	$(this).parent('.spAcContent').removeAttr('style');
});

// モーダル
$('.modalBtn').on('click', function () {
	$(this).next('.modalWrap').addClass('modalShow');
});
$('.modalClose').on('click', function () {
	$(this).parents('.modalWrap').removeClass('modalShow');
});
$(document).on('click', '.modalWrap', function () {
	$(this).removeClass('modalShow');
});
$(document).on('click', '.modalWindow', function (e) {
	e.stopPropagation();
});

//　スムーススクロール
$('body').on('click', 'a', function () {
	var anc = $(this).attr('href');
	if (anc.indexOf('#') === 0 || anc.indexOf('/#') === 0) {
		if (anc.indexOf('/#') === 0) {
			var anc = anc.replace('/', '');
		}
		var speed = 400;
		var position = $(anc).offset().top - $('#header').outerHeight(true);
		$('body,html').animate({
			scrollTop: position
		}, speed, 'swing');
		return false;
	}
});

var ua = navigator.userAgent;
if (ua.indexOf('Trident') !== -1) {
	$(document).ready(function () {
		var ieScrollFunc = function () {
			var speed = 400;
			var hash = location.hash;
			var headerHeight = $('#header').outerHeight(true);
			if (hash) {
				var position = $(hash).offset().top - headerHeight;
				$('body,html').animate({
					scrollTop: position
				}, speed, 'swing');
			}
		}
		setTimeout(ieScrollFunc, 300);
	});
} else {
	$(window).on('load', function () {
		var speed = 400;
		var hash = location.hash;
		var headerHeight = $('#header').outerHeight(true);
		if (hash) {
			var position = $(hash).offset().top - headerHeight;
			$('body,html').animate({
				scrollTop: position
			}, speed, 'swing');
		}
	});
}

//パラメーターの取得
function getParam(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// 読み込み時
$(document).ready(function () {
	if ($('.moreContents.moreMod01 .moreItem').length < 7) {
		$('.moreBtn01').hide();
	}
	if ($('.moreContents.moreMod02 .moreItem').length < 9) {
		$('.moreBtn02').hide();
	}
	if ($('.moreContents.moreMod03 .moreItem').length < 11) {
		$('.moreBtn03').hide();
	}
	if ($('.moreContents.moreMod04 .moreItem').length < 21) {
		$('.moreBtn04').hide();
	}

	objectFitImages("img.ofi");

	$('.scrollHint').wrap('<div class="scrollHintWrap" />');
	$('.scrollHintWrap').on('click', function () {
		$(this).addClass('scHide');
	});

	//SPローカルナビ
	var blandCurrent = getParam('nav');

	if (blandCurrent == null) {
		$('.localNav .navItem[data-brand="ALL"]').addClass('current');
	} else {
		$('.localNav .navItem').each(function () {
			if ($(this).attr('data-brand') == blandCurrent) {
				$(this).addClass('current');
				$(this).parents('.localNav').find('.spAcBtn').html($(this).html());
			}
		});
	}

	//サイドメニューのハイライト
	var path = location.pathname;
	$('.sideMenu a').each(function () {
		if ($(this).attr('href') === path) {
			$(this).addClass('current');
		}
	});

	//　タブ初期表示
	$('.tabBtn li').each(function () {
		if ($(this).hasClass('current')) {
			var initNum = $(this).index();
			$('.tabContent .tabItem').css({
				display: 'none'
			}).eq(initNum).fadeIn();
		}
	});

	// スマホ番号
	if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
		$(function () {
			$('.sptel').each(function () {
				var str = $(this).html();
				if ($(this).children().is('img')) {
					$(this).html($('<a>').attr('href', 'tel:' + $(this).children().attr('alt').replace(/-/g, '')).append(str + '</a>'));
				} else {
					$(this).html($('<a>').attr('href', 'tel:' + $(this).text().replace(/-/g, '')).append(str + '</a>'));
				}
			});
		});
	}

	// スライダーの初期化
	$('.slideMv').on('afterChange', function (evt, slick, currentSlide) {
		// currentSlide は現在のスライドのインデックス 0 からカウント
		var slideCount = slick.slideCount - 1;
		if (slideCount === currentSlide) {
			$(this).slick('slickPause');
		}
	})
		.slick({
			slidesToShow: 1,
			autoplay: false,
			cssEase: 'ease-in-out',
			autoplaySpeed: 1200,
			speed: 1200,
			draggable: false,
			pauseOnFocus: false,
			pauseOnHover: false,
			dots: false,
			controls: false,
			arrows: false,
			fade: true
		});



	var spMvSliderNum = $('.spSlideMv li').length;
	var spMvSliderNumNow = $('.spSlideMv li').length;
	var spMvSlider = $('.spSlideMv');
	spMvSlider.on('afterChange', function (evt, slick, currentSlide) {
		if (spMvSliderNum == spMvSliderNumNow) {
			// spMvSlider.slick('slickRemove', 0);
		}
		spMvSliderNumNow = spMvSliderNum - 1;
	})
		.slick({
			slidesToShow: 1,
			autoplay: true,
			cssEase: 'ease-in-out',
			// autoplaySpeed: 4000,
			// speed: 3000,
			dots: false,
			controls: false,
			arrows: false,
			fade: true
		});

	$('.pressSlide').slick({
		slidesToShow: 1,
		autoplay: false,
		cssEase: 'ease-in-out',
		// autoplaySpeed: 4000,
		// speed: 3000,
		dots: true,
		controls: false,
		arrows: true,
		prevArrow: '<span class="slide01_arw arw_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
		nextArrow: '<span class="slide01_arw arw_next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
		fade: true,
		customPaging: function (slick, index) {
			// スライダーのインデックス番号に対応した画像のsrcを取得
			var targetImage = slick.$slides.eq(index).find('img').attr('src');
			// slick-dots > li　の中に上記で取得した画像を設定
			return '<img src=" ' + targetImage + ' "/>';
		}
	});
	$('.pressSlide .slick-arrow').prependTo('.pressSlide .slick-list');

	// $('.slide01').slick({
	//   slidesToScroll: 4,
	//   slidesToShow: 4,
	//   dots: false,
	//   controls: false,
	//   prevArrow: '<span class="slide01_arw arw_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
	//   nextArrow: '<span class="slide01_arw arw_next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
	//   responsive: [{
	//     breakpoint: 767,
	//     settings: {
	//       slidesToShow: 1,
	//       slidesToScroll: 1,
	//     }
	//   }]
	// });

	// トップへの表示
	// var topBtn = $('#pagetop');
	// $(window).scroll(function () {
	//   if ($(this).scrollTop() > 100) {
	//     topBtn.addClass('show');
	//   } else {
	//     topBtn.removeClass('show');
	//   }
	// });
	// topBtn.click(function () {
	//   $('body,html').animate({
	//     scrollTop: 0
	//   }, 500);
	//   return false;
	// });

	$('.footerPagetop').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

	// $('a[href$=".pdf"]').each(function () {
	//   $(this).attr('target', '_blank');
	// });

	//　吸着ヘッダーの準備
	// $('#header .logo').clone().appendTo('.headerClone');
	// $('#header .gnav').clone().appendTo('.headerClone');
	// $('#header .snsNav').clone().appendTo('.headerClone');
});

// ロード後＆スクロール時
$(window).on('load scroll', function () {
	if (window.innerWidth < 768) {

	} else {

	}

	if ($(this).scrollTop() > 1) {
		$('body').addClass('gnavUp');
	} else {
		$('body').removeClass('gnavUp');
	}

	if ($(this).scrollTop() > $('#header').height()) {
		$('body').addClass('showFixMenu');
	} else {
		$('body').removeClass('showFixMenu');
	}
});

// ロード後＆リサイズ時
$(window).on('load resize', function () {
	if (window.innerWidth < 768) {

	} else {

	}
});

//---------- 独自の設定 ---------------------
//カルーセルスライダー
$('.calSlider').slick({
	fade: true,
	autoplay: true,
	autoplaySpeed: 1500,
	responsive: true,
	dots: true,
	arrows: true,
});

//ハンバーガーメニュー切り替え
var spMenuDesign = document.querySelector('.spMenuBtn');
var menuHide = document.querySelector('.menu-item');
spMenuDesign.addEventListener('click', function () {
	spMenuDesign.classList.toggle('clicked');
	menuHide.classList.toggle('clicked');
});

//グローバルナビゲーション動作
var startPos = 0,
	winScrollTop = 0;
$(window).on('scroll', function () {
	winScrollTop = $(this).scrollTop(); //トップからのスクロール量をとる
	if (winScrollTop >= startPos) {
		$('#header').addClass('hide');
	} else {
		$('#header').removeClass('hide');
	}
	startPos = winScrollTop;
});

//到達したら要素をふわっと表示させる
function showSection() {
	var secElm = document.getElementsByClassName('scroll-sec-animation');
	//var secElm = document.querySelector('scroll-sec-animation');
	if (!secElm) return; //要素が無ければ処理をキャンセル

	var showTiming = window.innerHeight > 768 ? 200 : 40;
	var scrollY = window.pageYOffset;
	var windowH = window.innerHeight;

	for (var i = 0; i < secElm.length; i++) {
		var elemClientRect = secElm[i].getBoundingClientRect();
		var elemY = scrollY + elemClientRect.top;
		//console.log(elemClientRect);

		if (scrollY + windowH - showTiming > elemY) {
			secElm[i].classList.add('is-show');
		} else if (scrollY + windowH < elemY) {
			secElm[i].classList.remove('is-show');
		}
	}
}

showSection();
window.addEventListener('scroll', showSection);
// onload = showSection;
//$(window).on('scroll', showSection());