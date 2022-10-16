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

    // Header on scroll
    function scrollFunction() {
      const scrollTop = $(document.body).scrollTop();
      const scrollTopDocumentElement = $(document.documentElement).scrollTop();
      const $header = $("header");

      if (scrollTop > 72 || scrollTopDocumentElement > 72) {
        $header.addClass("scroll");
      } else {
        $header.removeClass("scroll");
      }
    }

    // Header menu controllers
    $burger.on("click", () => {
      $burger.toggleClass("burger__active");
      $searchInput.toggleClass("active");
      $logoImage.toggleClass("is-hidden");
      $headerNav.toggleClass(cssClassOpen);
    });

    const $searchInput = $(".form__label");
    const $logoImage = $(".logo a");

    $submenuHeaderBtn.on("click", () => {
      if ($burger.hasClass("burger__active")) {
        $burger.toggleClass("burger__active");
        $headerNav.toggleClass(cssClassOpen);
      }
      $searchInput.toggleClass("active");
      $logoImage.toggleClass("is-hidden");
    });

    // SLIDERS
    $("#mainSlider").slick({
      slidesToShow: 1,
      // arrows: false,
      prevArrow: '<span class="arrow prev"><img src="../../assets/arrow.svg" alt=""></span>',
      nextArrow: '<span class="arrow next"><img src="../../assets/arrow.svg" alt=""></span>',
      dots: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: false,
            // arrows: false,
            slidesToShow: 1,
          },
        },
      ],
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
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 996,
          settings: {
            dots: true,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 685,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 520,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
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
          },
        },
      ],
    });

    // PRODUCT ITEM SLIDERs
    $("#productBigImage").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      asNavFor: "#productSmallImage",
      arrows: true,
    });

    $("#productSmallImage").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: "#productBigImage",
      dots: false,
      focusOnSelect: true,
      arrows: false,
    });
  });
})();
