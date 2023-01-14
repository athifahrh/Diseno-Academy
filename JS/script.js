// Awal Navigation Bar
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();

// Sticky Navbar
window.addEventListener("scroll", function() {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

// Smooth Scrolling
$('.navbar a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },800);
  }
});
// Akhir Navigation Bar

// AOS
AOS.init({
  duration: 1000,
  offset: 120,
  easing: 'ease-in-out'
})

// Awal Log in
var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn2');

function register() {
  x.style.left='-400px';
  y.style.left='50px';
  z.style.left='110px';
}

function login() {
  x.style.left='50px';
  y.style.left='450px';
  z.style.left='0px';
}
// Akhir Log in


// Awal Counter Up

// ALASAN
(function( $ ){
  "use strict";

  $.fn.counterUp = function( options ) {

    // Defaults
    var settings = $.extend({
        'time': 400,
        'delay': 10
    }, options);

    return this.each(function(){

        // Store the object
        var $this = $(this);
        var $settings = settings;
        var $originalText = $this.text();

        var counterUpper = function() {
            var nums = [];
            var divisions = $settings.time / $settings.delay;
            var num = $originalText;
            var isComma = /[0-9]+,[0-9]+/.test(num);
            num = num.replace(/,/g, '');
            var isInt = /^[0-9]+$/.test(num);
            var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
            var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;

            // Generate list of incremental numbers to display
            for (var i = divisions; i >= 1; i--) {

                // Preserve as int if input was int
                var newNum = parseInt(num / divisions * i);

                // Preserve float if input was float
                if (isFloat) {
                    newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
                }

                // Preserve commas if input had commas
                if (isComma) {
                    while (/(\d+)(\d{3})/.test(newNum.toString())) {
                        newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
                    }
                }

                nums.unshift(newNum);
            }

            $this.data('counterup-nums', nums);
            $this.text('0');

            // Updates the number until we're done
            var f = function() {
                $this.text($this.data('counterup-nums').shift());
                if ($this.data('counterup-nums').length) {
                    setTimeout($this.data('counterup-func'), $settings.delay);
                } else {
                    delete $this.data('counterup-nums');
                    $this.data('counterup-nums', null);
                    $this.data('counterup-func', null);
                }
            };
            $this.data('counterup-func', f);

            // Start the count up
            setTimeout($this.data('counterup-func'), $settings.delay);
        };

        // Perform counts when the element gets into view
        $this.waypoint(counterUpper, { offset: '100%', triggerOnce: true });
    });

  };

})( jQuery );

$(document).ready(function(){
  $('.num').counterUp({
    delay: 10,
    time: 1200,
});
})
// ALASAN
// Akhir Counter UP


// Awal Review
$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  margin:0,
  nav:false,
  dots:true,
  mouseDrag:false,
  slideBy:2,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:2
    },
  }
})
// Akhir Review


// Awal Our Mentor
$(document).ready(function(){
  $('.mentor .container section').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }]
  });
})


// $('.owl-carousel2').owlCarousel({
//   loop:true,
//   autoplay:true,
//   margin:0,
//   nav:false,
//   dots:true,
//   mouseDrag:false,
//   slideBy:3,
//   responsive:{
//     0:{
//       items:1
//     },
//     600:{
//       items:2
//     },
//     1000:{
//       items:3
//     },
//   }
// })
// Akhir Our Mentor

// Awal Partner
$(document).ready(function(){
  $('.partner .container').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }]
  });
})
// Akhir Partner