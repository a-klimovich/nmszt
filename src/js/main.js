(function () {
  $(".lazy").lazy();
  // Const
  const cssClassActive = "active";
  const cssClassOpen = "open";
  const cssClassIsHidden = "is-hidden";

  // Node's
  const $body = $("body");
  const $headerNav = $("#headerNav");
  const $burger = $(".burger");
  const $submenuHeaderBtn = $(".submenu-header");
  const $laguageMobileMenu = $(".mobile-numbers-language");
  const productBigImageSlider = $("#productBigImage");
  const productSmallImageSlider = $("#productSmallImage");
  const galeryLightBoxSlider = $(".show-in-modal a");
  const galleryLightBox = $(".gallery a");

  const mainSliederSettings = {
    slidesToShow: 1,
    prevArrow: '<span class="arrow prev"><img src="./assets/arrow.svg" alt=""></span>',
    nextArrow: '<span class="arrow next"><img src="./assets/arrow.svg" alt=""></span>',
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  const logoSliderSettings = {
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
  };
  const sliderProductSettings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 555,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };
  const achivSliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  $(document).ready(function () {
    window.onscroll = () => {
      const scrollTop = $("body").scrollTop() || $("html").scrollTop();
      if (scrollTop > 72) {
        $("header").addClass("scroll");
        $body.addClass("scroll");
      } else {
        $("header").removeClass("scroll");
        $body.removeClass("scroll");
      }
    };

    $(document).on("click", function (event) {
      if (!$(event.target).closest(".nav__item").length) {
        $(".nav__item").each(function () {
          $(this).removeClass(cssClassActive);
        });
      }
    });

    $(".overlay").on("click", () => {
      $laguageMobileMenu.removeClass(cssClassActive);
      $burger.removeClass("burger__active");
      $searchInput.removeClass(cssClassActive);
      $logoImage.removeClass(cssClassIsHidden);
      $headerNav.removeClass(cssClassOpen);
      $("body").removeClass(cssClassOpen);
    });

    const $searchInput = $(".form__label");
    const $logoImage = $(".logo a");

    // Header menu controllers
    $burger.on("click", () => {
      $laguageMobileMenu.removeClass(cssClassActive);
      $burger.toggleClass("burger__active");
      $searchInput.toggleClass(cssClassActive);
      $logoImage.toggleClass(cssClassIsHidden);
      $headerNav.toggleClass(cssClassOpen);
      $("body").toggleClass(cssClassOpen);
    });

    $submenuHeaderBtn.on("click", () => {
      if ($burger.hasClass("burger__active")) {
        $burger.toggleClass("burger__active");
        $headerNav.toggleClass(cssClassOpen);
      }

      $laguageMobileMenu.toggleClass(cssClassActive);
    });

    $(".nav__item").on("click", function () {
      const isActive = $(this).hasClass(cssClassActive);
      $(".nav__item").removeClass(cssClassActive);
      if (!isActive) {
        $(this).addClass(cssClassActive);
      } else {
        $(this).find("ul").slideUp();
      }
    });

    $(".nav__item").each(function () {
      const hasUlInside = $(this).find("ul").length > 0;

      if (!hasUlInside) {
        $(this).find(".link-box > button").css("display", "none");
      }
    });

    // SLIDERS
    $("#mainSlider").slick(mainSliederSettings);
    $("#logoSlider").slick(logoSliderSettings);
    $("#sliderProduct").slick(sliderProductSettings);
    $("#achivSlider").slick(achivSliderSettings);

    if (productBigImageSlider.length && productSmallImageSlider.length && galeryLightBoxSlider.length) {
      $("#productBigImage").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
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

      const gallery = galeryLightBoxSlider.simpleLightbox({});
    }

    if (galleryLightBox.length) {
      const gallery = $(".gallery a").simpleLightbox({});
    }
  });

  $(".pagination .pagination__number.active")?.click((event) => event.preventDefault());
})();
