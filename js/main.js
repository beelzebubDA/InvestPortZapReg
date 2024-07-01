$(document).ready(function () {

  $("#menu").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });


  $("#menu2").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });


  $('ul.tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  });


  $('.about-us-slider').slick({
    infinite: true,
    speed: 300,
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: false,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
          slidesToScroll: 1
        }
      }
    ]
  });

  const burger = document.querySelector('.burger');
  const navbar = document.querySelector('.mt-mobile');
  const body = document.querySelector('body');

  burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');

  });


  // Размер Поиска при нажатии

  let headerSearch = $(".header-menu__seach-block .header-search__inp");
  let headerTopMenu = $(".container.top-menu");

  headerSearch.on('click', () => {
    headerTopMenu.toggleClass("topgap");
    headerSearch.toggleClass("inpWidth");
  });

  // при скроле вниз добавить класс

  let header = $(".container.top-menu");
  let blockTitle = $(".areasOfActivity-items .areasOfActivity-title");
  let scrollChange = 1;
  let titleScroll = $('.areasOfActivity-items .areasOfActivity-title').offset().top - $('header').height();
  // let blockTitleChangeColor = 1673;
  let blockTitleChangeColor = titleScroll + $('.areasOfActivity-section').height() * 0.29;
  
  let blockTitleRelative = $('.areasOfActivity-items__right-side .areasOfActivity-item:last-child').offset().top - 60;
  let blockTitleSpanChangeColor = blockTitleChangeColor - $(".areasOfActivity-items .areasOfActivity-title span").height();

  // $(window).resize(function () {

  // });

  if ($(window).width() > 1700) {
    $(window).scroll(function () {

      let scroll = $(window).scrollTop();
      let blockTitleChangeColor = titleScroll + $('.areasOfActivity-section').height() * 0.29;
      console.log(scroll);

      // изменения цвета хедера
      if (scroll >= scrollChange) {
        header.addClass('bg-blue');
      } else {
        header.removeClass("bg-blue");
      }

      // зафиксировать заголовок
      if (scroll >= titleScroll) {
        blockTitle.addClass("titleFixed");
      } else {
        blockTitle.removeClass("titleFixed");
      }

      // изменения цвета заголовка
      if (scroll >= blockTitleChangeColor) {
        blockTitle.addClass("titleblue");
      } else {
        blockTitle.removeClass("titleblue");
      }

      if (scroll >= blockTitleSpanChangeColor) {
        blockTitle.addClass("titleSpanblue");
      } else {
        blockTitle.removeClass("titleSpanblue");
      }

      // остановить скролл
      if (scroll >= blockTitleRelative) {
        blockTitle.addClass("titleRel");
      } else {
        blockTitle.removeClass("titleRel");
      }
    });
  } else if ($(window).width() > 1480) {
    $(window).scroll(function () {
      let scroll = $(window).scrollTop();

      // titleScroll = 826;
      // blockTitleChangeColor = 1450;
      // blockTitleSpanChangeColor = 1355;
      // blockTitleRelative = 2510;
      let blockTitleChangeColor = titleScroll + $('.areasOfActivity-section').height() * 0.28;

      // console.log(scroll);

      // изменения цвета хедера
      if (scroll >= scrollChange) {
        header.addClass('bg-blue');
      } else {
        header.removeClass("bg-blue");
      }

      // зафиксировать заголовок
      if (scroll >= titleScroll) {
        blockTitle.addClass("titleFixed");
      } else {
        blockTitle.removeClass("titleFixed");
      }

      if (scroll >= blockTitleSpanChangeColor) {
        blockTitle.addClass("titleSpanblue");
      } else {
        blockTitle.removeClass("titleSpanblue");
      }

      // изменения цвета заголовка
      if (scroll >= blockTitleChangeColor) {
        blockTitle.addClass("titleblue");
      } else {
        blockTitle.removeClass("titleblue");
      }

      // остановить скролл
      if (scroll >= blockTitleRelative) {
        blockTitle.addClass("titleRel");
      } else {
        blockTitle.removeClass("titleRel");
      }
    });
  } else if ($(window).width() > 1230) {
    $(window).scroll(function () {
      let scroll = $(window).scrollTop();

      // titleScroll = 751;
      // blockTitleChangeColor = 1400;
      // blockTitleRelative = 2650;
      // blockTitleSpanChangeColor = 1320;

      let blockTitleChangeColor = titleScroll + $('.areasOfActivity-section').height() * 0.24;

      // изменения цвета хедера
      if (scroll >= scrollChange) {
        header.addClass('bg-blue');
      } else {
        header.removeClass("bg-blue");
      }

      // зафиксировать заголовок
      if (scroll >= titleScroll) {
        blockTitle.addClass("titleFixed");
      } else {
        blockTitle.removeClass("titleFixed");
      }

      // изменения цвета заголовка
      if (scroll >= blockTitleChangeColor) {
        blockTitle.addClass("titleblue");
      } else {
        blockTitle.removeClass("titleblue");
      }

      if (scroll >= blockTitleSpanChangeColor) {
        blockTitle.addClass("titleSpanblue");
      } else {
        blockTitle.removeClass("titleSpanblue");
      }

      // остановить скролл
      if (scroll >= blockTitleRelative) {
        blockTitle.addClass("titleRel");
      } else {
        blockTitle.removeClass("titleRel");
      }
    });
  } else if ($(window).width() > 992) {

    $(window).scroll(function () {

      let scroll = $(window).scrollTop();

      // изменения цвета хедера
      if (scroll >= scrollChange) {
        header.addClass('bg-blue');
      } else {
        header.removeClass("bg-blue");
      }


    });
  } else if ($(window).width() > 300) {
    $(window).scroll(function () {

      let scroll = $(window).scrollTop();

      // изменения цвета хедера
      if (scroll >= scrollChange) {
        header.addClass('bg-blue');
      } else {
        header.removeClass("bg-blue");
      }

    });
  };

  let openHeaderMenuBtn = $(".header-menu-OpenBtn");
  let headerMenu = $(".header-menu");

  openHeaderMenuBtn.on('click', () => {
    headerMenu.toggleClass("opened");
  });


  window.addEventListener('load', function () {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  });

  // О нас слайдер

  $('.about-us-slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
  });
});