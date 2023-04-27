// (function ($) {
//   $(document).ready(function () {
//     $(document).on("click", "[toscroll]", function (e) {
//       e.preventDefault();
//       var link = $(this).attr("toscroll");
//       if ($(link).length > 0) {
//         var posi = $(link).offset().top - 50;
//         $("body,html").animate(
//           {
//             scrollTop: posi,
//           },
//           1000
//         );
//       }
//     });

//     var sections = $(".oppo-reno7");
//     // throttle function, enforces a minimum time interval
//     function throttle(fn, interval) {
//       var lastCall, timeoutId;
//       return function () {
//         var now = new Date().getTime();
//         if (lastCall && now < lastCall + interval) {
//           // if we are inside the interval we wait
//           clearTimeout(timeoutId);
//           timeoutId = setTimeout(function () {
//             lastCall = now;
//             fn.call();
//           }, interval - (now - lastCall));
//         } else {
//           // otherwise, we directly call the function
//           lastCall = now;
//           fn.call();
//         }
//       };
//     }

//     function handleScrollNav() {
//       var scrollPosition = $(window).scrollTop();
//       var heightMenu = $(".st-menu").height();
//       sections.each(function () {
//         if ($(this).is(":visible")) {
//           const thatPosition = $(this).position().top;
//           const thatHeight = $(this).height();
//           if (
//             scrollPosition > thatPosition - heightMenu &&
//             scrollPosition < thatPosition + thatHeight
//           ) {
//             const id = $(this).attr("id");
//             $(".st-menu ul li a").removeClass("active");
//             $(`.st-menu ul li a[href=#${id}]`).addClass("active");
//           }
//         }
//       });
//     }
//     $(window).scroll(throttle(handleScrollNav, 100));

//     var swiper = new Swiper(".st3-swiper", {
//       pagination: {
//         el: ".st3 .swiper-pagination",
//         clickable: true,
//       },
//       navigation: {
//         nextEl: ".st3 .swiper-button-next",
//         prevEl: ".st3 .swiper-button-prev",
//       },
//     });

//     $(".st-video__img").click(function () {
//       $(this).hide();
//       $(".st-video__iframe").show();
//       var videoURL = $("#playerID").prop("src");
//       videoURL += "?autoplay=1";
//       $("#playerID").prop("src", videoURL);
//     });
//     $(".js--wrap-item").each(function () {
//         var child = $(this).children();
//         child.click(function () {
//           $(this).siblings().removeClass("active");
//           $(this).addClass("active");
//         });
//       });
//       $('.js--wrap-content').children().click(function(){
//           $('.reno7-box-content').removeClass('active');
//           let attrBlock=$(this).attr('data-box');
//           $('.'+attrBlock).addClass('active');
//       })
//     //modal
//     $(".js--open-modal").each(function () {
//       var btn = $(this).find(".btn-more");
//       btn.click(function () {
//         var dataTaget = $(this).attr("data-target");
//         $("." + dataTaget).show();
//         $("html").addClass("no-scroll");
//       });
//     });
//     $(".js--close-modal").click(function () {
//       $(".popup-modal").hide();
//       $("html").removeClass("no-scroll");
//     });

//     // popup dat hang
//     function fix_scroll() {
//         var previousScrollY = 0;
//         //click button
//         $('.js--open-popup').click(function (e) {
//             previousScrollY = window.scrollY;
//             $('html').css({
//                 marginTop: -previousScrollY,
//                 overflow: 'hidden',
//                 left: 0,
//                 right: 0,
//                 top: 0,
//                 bottom: 0,
//                 'z-index': 1,
//                 position: 'fixed',
//             });
//             $('.popup').addClass('open');
//         });
//         function close_modal() {
//             $('html').css({
//                 marginTop: 0,
//                 overflow: 'hidden visible',
//                 left: 'auto',
//                 right: 'auto',
//                 top: 'auto',
//                 bottom: 'auto',
//                 position: 'static',
//             });
//             window.scrollTo(0, previousScrollY);
//             $('.popup').removeClass('open');
//         }
//         $('.js--close-popup').click(function (e) {
//             close_modal();
//         });
//     }
//     fix_scroll();

//     $('.js--booking-product').each(function(){
//         let parent=$(this);
//         let list=parent.find('.js--wrap-img');
//         let item=list.children();
//         let img=parent.find('.js--img-change img');
//         item.click(function(){
//             let attrSrc=$(this).attr('data-color');
//             img.attr('src',`images/reno7-${attrSrc}.png`);
//         })
//     })

//     $('.popup-signup .complete-btn').click(function(){
//         $('.popup-signup').hide();
//         $('.popup-complete').show();
// })
//   });
// })(window.jQuery);

// js--next
// var swiper = new Swiper(".mySwiper", {
//   rewind: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
AOS.init({
  once: true,
});

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

// open close menu

// (function () {
// });
// console.log($(".toggle-menu"))
// $(".toggle-menu").click(function (e) {
//   console.log("d");
//   e.preventeDeafault()
//   $(this).toggleClass("active");
//   $(".st-menu").toggleClass("open");
// });

// document.querySelector(".toggle-menu").addEventListener("click", ()=> {
//   console.log(this)
//   document.querySelector(".toggle-menu").classList.toggle("active")
// })

let openMenu = function () {
    var menuBox = $('.st-menu');
    menuBox.style.visibility= 'visible';
    menuBox.style.left = '0';
    window.onclick = function(event) {
        var btn = $('.menuIcon')
        var menuBox = $('.st-menu');
        console.log(event.target)
        if (event.target != menuBox && event.target != btn) {
            menuBox.style.visibility= 'hidden';
            menuBox.style.left = '-100%';
        }
    }
}

let openSearch = function () {
  var searchBox = $(".searchBox");
  searchBox.style.visibility = "visible";
  searchBox.style.left = "-200px";
  window.onclick = function (event) {
    var btnSearch = $(".searchIcon");
    var searchBox = $(".searchBox");
    console.log(event.target);
    if (event.target != btnSearch) {
      searchBox.style.visibility = "hidden";
      searchBox.style.left = "-100px";
    }
  };
};

let openShare = function () {
  var shareBox = $(".shareSocial");
  shareBox.style.visibility = "visible";
  shareBox.style.top = "60px";
  window.onclick = function (event) {
    var btnShare = $(".shareIcon");
    var shareBox = $(".shareSocial");
    console.log(event.target);
    if (event.target != btnShare) {
      shareBox.style.visibility = "hidden";
      shareBox.style.top = "10";
    }
  };
};
