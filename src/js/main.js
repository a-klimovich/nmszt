(function () {
  $(document).ready(function () {
    window.onscroll = () => scrollFunction();
    // Base
    const cssClassActive = "active";
    const cssClassOpen = "open";
    const cssClassIsHidden = "is-hidden";

    // Node's
    const $headerNav = $("#headerNav");
    const $burger = $(".burger");
    const $submenuHeaderBtn = $(".submenu-header");
    const $shortInfo = $(".short-info");

    // Header on scroll
    function scrollFunction() {
      const scrollTop = $(document.body).scrollTop();
      const scrollTopDocumentElement = $(document.documentElement).scrollTop();
      const $header = $("header");

      if (scrollTop > 166 || scrollTopDocumentElement > 166) {
        $header.addClass("scroll");
      } else {
        $header.removeClass("scroll");
      }
    }

    // Header menu controllers
    $burger.on("click", () => {
      if ($shortInfo.hasClass(cssClassOpen)) {
        $shortInfo.toggleClass(cssClassOpen);
      }
      $burger.toggleClass("burger__active");
      $searchInput.toggleClass('active');
      $logoImage.toggleClass('is-hidden');
      $headerNav.toggleClass(cssClassOpen);
    });

    const $searchInput = $('.form__label');
    const $logoImage = $('.logo a');

    $submenuHeaderBtn.on("click", () => {
      if ($burger.hasClass("burger__active")) {
        $burger.toggleClass("burger__active");
        $headerNav.toggleClass(cssClassOpen);
      }
      $searchInput.toggleClass('active');
      $shortInfo.toggleClass(cssClassOpen);
      $logoImage.toggleClass('is-hidden');
    });

    // card open
    const questionsCard = $(".questions-card")
    
    questionsCard.each((i, elem) => {
      const btnOpenAnswer = $(".btnOpenAnswer", elem);
      const contentAnswer = $(".content__answer", elem);
      
      btnOpenAnswer.on("click", () => {
        btnOpenAnswer.toggleClass(cssClassActive);
        contentAnswer.toggleClass(cssClassIsHidden);
      });
    })

    // PRODUCT CARD LIST ITEM COUNTER
    const $productListCard = $('.production-list-card');

    $productListCard.each((i, elem)  => {
      const listLength = $('.list-menu li', elem).length;
      const $counterNode = $('.counter', elem);
      
      
      $(elem).on('click', () => {
        $(elem).toggleClass(cssClassActive)
      })

      if (listLength === 0) {
        $('.list-menu', elem).remove()
        $('.list-item-counter', elem).remove()
      }

      $counterNode[0].innerHTML = `${listLength}`;
    })

    // SECTION VIEW CONTROLER
    const plantScheam = $('.about-plant__scheam');
    const linesElem = $('.scheam__lines .line')
    const $aboutPlantContentTitle = $('.about-plant__content .title')
    const $aboutPlantContentText = $('.about-plant__content .text')
    const $aboutPlantContentLinkHref = $('.about-plant__content .btn-learn-more')

    const scheamContetn = [
      {
        title: 'О ЗАВОДЕ',
        text: 'Работаем с 1939 <br><br> Открытое акционерное общество «Кобринский маслодельно-сыродельный завод» это предприятие с 80-летним опытом работы и уникальными традициями производства. Мы с гордостью можем вспомнить каждый год работы завода. Нам есть, о чем рассказать и чем гордиться!',
        href: '#',
      },
      {
        title: 'ПРОИЗВОДСТВО',
        text: 'Работаем с 1939 <br><br> Открытое акционерное общество',
        href: '#',
      },
      {
        title: 'МИССИЯ',
        text: 'Работаем с 1939 <br><br> Открытое акционерное общество «Кобринский маслодельно-сыродельный завод»',
        href: '#',
      },
      {
        title: 'ПОЛИТИКА',
        text: 'Работаем с 1939 <br><br> <b> Открытое акционерное общество «Кобринский</b> маслодельно-сыродельный завод»',
        href: '#',
      },
    ];

    $aboutPlantContentTitle.html(scheamContetn[0].title);
    $aboutPlantContentText.html(scheamContetn[0].text);
    $aboutPlantContentLinkHref.attr('href', scheamContetn[0].href)
 
    linesElem.each((idx, element) => {
      $(element).on('click', () => {
        plantScheam.removeClass()
        plantScheam.addClass(`about-plant__scheam active-section-${idx + 1}`);
        // content
        $aboutPlantContentTitle.html(scheamContetn[idx].title);
        $aboutPlantContentText.html(scheamContetn[idx].text);
        $aboutPlantContentLinkHref.attr('href', scheamContetn[idx].href);

        // switch (idx) {
        //   case 0:
            
        //     break;
        //   case 1:
        //     $aboutPlantContentTitle.html(scheamContetn[idx].title);
        //     $aboutPlantContentText.html(scheamContetn[idx].text);
        //     $aboutPlantContentLinkHref.attr('href', scheamContetn[idx].href)
        //     break;
        //   case 2:
        //     $aboutPlantContentTitle.html(scheamContetn[idx].title);
        //     $aboutPlantContentText.html(scheamContetn[idx].text);
        //     $aboutPlantContentLinkHref.attr('href', scheamContetn[idx].href)
        //     break;
        //   case 3:
        //     $aboutPlantContentTitle.html(scheamContetn[idx].title);
        //     $aboutPlantContentText.html(scheamContetn[idx].text);
        //     $aboutPlantContentLinkHref.attr('href', scheamContetn[idx].href)
        //     break;
        //   default:
        //     break;
        // }
      })
    });

    // SLIDERS
    $("#mainSlider").slick({
      slidesToShow: 1,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: false,
            arrows: false,
            slidesToShow: 1
          }
        },
      ]
    });

    $("#logoSlider").slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: true,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 685,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 520,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });

    $("#sliderProduct").slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 980,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
          }
        },
      ]
    });
    
    $("#managmentStuff").slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
          }
        },
      ]
    });
  });
})();
