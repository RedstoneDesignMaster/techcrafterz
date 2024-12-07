
$('.portfolio-popup-thumpnail').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 4
    },
    1000: {
      items: 4
    }
  }
})
$('.portfolio-popup-carousel').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  autoplay: true,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})
// ******CUSTOM CURSOR*************
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")
});

$('.slider').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})
$('.pop-up').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.p-pakages').owlCarousel({
    loop:true,
    margin:30,
    dots:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})



$('.case-studies').owlCarousel({
    loop:true,
    margin:30,
    dots:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.testimonial-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
        dots:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$(document).ready(function(){
  $('.fancyTab').click(function(){
    $('.fancyTab').removeClass("active");
    $(this).addClass("active");
});
});
$(".skill-per").each(function() {
  var $this = $(this);
  var per = $this.attr("per");
  $this.css("width", per + "%");
  $({ animatedValue: 0 }).animate(
    { animatedValue: per },
    {
      duration: 1000,
      step: function() {
        $this.attr("per", Math.floor(this.animatedValue) + "%");
      },
      complete: function() {
        $this.attr("per", Math.floor(this.animatedValue) + "%");
      }
    }
  );
});

document.addEventListener('click', () => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
});


//**********Fixed-NAV***********
$(window).scroll(function() {
  var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
  var stickynav = $('ul.main-nav-right .toggle'),
    scroll = $(window).scrollTop();
  if (scroll >= 350) stickynav.addClass('sticky-toggle');
  else stickynav.removeClass('sticky-toggle');
});
$(window).scroll(function() {
  var stickynav = $('ul.main-nav-right .toggle'),
    scroll = $(window).scrollTop();
  if (scroll >= 750) stickynav.addClass('sticky-toggle-2');
  else stickynav.removeClass('sticky-toggle-2');
});
// SCROLL MORE
$(document).ready(function() {
  $('.index-banner-section .banner-bottom-left a').click(function() {
    $('html, body').animate({
      scrollTop: $(".more-scroll").offset().top
    }, 1000)
  })
});
// RESPONSIVE NAVIGATION
$(document).ready(function() {
  $("#navbar").on("click", function() {
    $(".nveMenu").addClass("is-opened");
    $(".overlay").addClass("is-on");
  });
  $(".overlay").on("click", function() {
    $(this).removeClass("is-on");
    $(".nveMenu").removeClass("is-opened");
  });
});
// RESPONSIVE NAVIGATION
$(document).ready(function() {
  $(".toggle").click(function() {
    $("nav").toggleClass("open");
    $("nav").removeClass("hidden");
    $("body").toggleClass("over-flow");
    $(".banner").toggleClass("new");

  });
});
$(window).scroll(function(){
  var sticky = $('.second-header'),
      scroll = $(window).scrollTop();
  if (scroll >= 350) sticky.addClass('sticky-header');
  else sticky.removeClass('sticky-header');
});


  $('.counter').each(function () {
         $(this).prop('Counter',0).animate({
             Counter: $(this).text()
         }, {
             duration: 1000,
             easing: 'swing',
             step: function (now) {
                 $(this).text(Math.ceil(now));
             }
         });
     });
     $(window).width() > 768 &&
                 setTimeout(function () {
                     var e = 0,
                         t = 0,
                         n = setInterval(function () {
                             $(".loader .loader-counter").html(t + "%"),
                                 $(".loader").css("width", t + "%"),
                                 t++,
                                 101 == ++e && (clearInterval(n), $(".loader").fadeOut(300), $(".body-css").addClass("visible"), $(".tablet, .laptop, .phone").addClass("active"));
                         }, 15);
                 });


$(document).ready(function(){
    $("#toggle-btn").click(function(){
      $("#toggle-example").collapse('toggle'); // toggle collapse
    });
});
$('.main-menu li').hover(function() {
  $(this).addClass('hover')
}, function() {
  $(this).removeClass('hover')
})
$(document).ready(function() {
  $(".filter-button").click(function() {
    var value = $(this).attr('data-filter');
    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $('.filter').show('1000');
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter").not('.' + value).hide('3000');
      $('.filter').filter('.' + value).show('3000');
    }
  });
  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
});

$('.slider-brands').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})

//********* TYPEWRITE JS ***********
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};



$(window).load(function() {
	$('.fancyTabs').each(function() {
		var highestBox = 0;
		$('.fancyTab a', this).each(function() {
			if ($(this).height() > highestBox) highestBox = $(this).height();
		});
		$('.fancyTab a', this).height(highestBox);
	});
});

// Imran New Js
$('.owl-carousel').owlCarousel({
    loop:true,
        dots:true,
    nav:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


// service page slider
$('.service-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5

        }
    }
})
// 
var current_fs, next_fs, previous_fs;
var left, opacity, scale;
var animating;
$(".next").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  next_fs.show();
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        scale = 1 - (1 - now) * 0.2;
        left = now * 50 + "%";
        opacity = 1 - now;
        current_fs.css({
          transform: "scale(" + scale + ")"
        });
        next_fs.css({ left: left, opacity: opacity });
      },
      duration: 0,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      easing: "easeInOutBack"
    }
  );
});

$(".previous").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  $("#progressbar li")
    .eq($("fieldset").index(current_fs))
    .removeClass("active");

  previous_fs.show();
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        scale = 0.8 + (1 - now) * 0.2;
        left = (1 - now) * 50 + "%";
        opacity = 1 - now;
        current_fs.css({ left: left });
        previous_fs.css({
          transform: "scale(" + scale + ")",
          opacity: opacity
        });
      },
      duration: 0,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      easing: "easeInOutBack"
    }
  );
});

$(".submit").click(function () {
  return false;
});

let colorButton = document.getElementById("primary_color");
let colorDiv = document.getElementById("color_val");

colorButton.oninput = function() {
    colorDiv.innerHTML = colorButton.value;
    colorDiv.style.color = colorButton.value;
}
