// window.alert("Hello")    //Test


// ===========================================================================================================================
// Navbar
var wstick = $(window);
wstick.on('scroll', function () {
    var scroll = wstick.scrollTop();
    if (scroll < 150) {
        $(".box-nav-all").removeClass("sticky");
    } else {
        $(".box-nav-all").addClass("sticky");
    }
});

// -------------------------------------------
// maunn
let maunn = document.querySelector('.maunn');
maunn.addEventListener('click', function () {
    this.classList.toggle('is-active');
})

$(document).ready(function () {
    $('.mun-align').click(function () {
        $('.box-cilsh-nav').toggleClass('active')
        // $(window.alert('lskclfsjk'))
    })
})
// ===========================================================================================================================

// ===========================================================================================================================
// header

// typed


var typed = new Typed('.typeSkills', {
    strings: [
        'html', 'html5', 'css', 'css3', 'Bootstrap', 'JavaScript', 'EcmaScript next', 'jQuery', 'plugin.js', 'Ajax',
        'Type Script', 'Angular', 'Sass', 'Git', 'GitHub'
    ],
    typeSpeed: 100,
    loop: true,
    loopCount: Infinity,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
});

// -------------------------------------------
/* slider owl-carousel */
$('.slider-2').owlCarousel({
    nav: false,
    dots: false,
    center: true,
    loop: true,
    margin: 50,
    responsiveClass: true,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    // rtl: true,
    responsive: {

        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
});
// ===========================================================================================================================

// ===========================================================================================================================
/* About */


$('.slider-3').owlCarousel({
    nav: false,
    dots: false,
    // center: true,
    loop: true,
    margin: 50,
    responsiveClass: true,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    // rtl: true,
    autoHeight: true,
    autoHeightClass: 'owl-height',
    responsive: {

        0: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
        }
    }
});
// ===========================================================================================================================

// ===========================================================================================================================
/* About */
// ===========================================================================================================================

// ===========================================================================================================================
/* Skills I Do */
function startCounter() {

    // $("#progress85").css("width","100%")
    $(".progressWidth-100").animate({ width: '100%' }, 2000);
    $(".progressWidth-90").animate({ width: '90%' }, 2000);
    $(".progressWidth-80").animate({ width: '80%' }, 2000);
    $(".progressWidth-60").animate({ width: '60%' }, 2000);
}


let progressOffsetTop = $("#Skills").offset().top;

$(window).scroll(function () {
    let wScroll = $(window).scrollTop();

    if (wScroll > progressOffsetTop - 170) {
        startCounter();
    }
})
// ---------------------------------------


// ---------------------------------------
// circular-progress

$(function () {

    // Remove svg.radial-progress .complete inline styling
    $('svg.radial-progress').each(function (index, value) {
        $(this).find($('circle.complete')).removeAttr('style');
    });

    // Activate progress animation on scroll
    $(window).scroll(function () {
        $('svg.radial-progress').each(function (index, value) {
            // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
            if (
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                // Get percentage of progress
                percent = $(value).data('percentage');
                // Get radius of the svg's circle.complete
                radius = $(this).find($('circle.complete')).attr('r');
                // Get circumference (2πr)
                circumference = 2 * Math.PI * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1250);

            }
        });
    }).trigger('scroll');

});
// ===========================================================================================================================


// ==========================================================================================================================
// start Gallery-Hover
// (function ($) {
//     $.fn.snakeify = function (options) {
//         var settings = $.extend({
//             inaccuracy: 30,
//             speed: 200
//         }, options);
//         this.find('.overlay').css({ top: -9999999 });

//         this.mouseenter(function (e) {
//             const container = $(this);
//             const overlay = container.find('.overlay');
//             const parentOffset = container.offset();
//             const relX = e.pageX - parentOffset.left;
//             const relY = e.pageY - parentOffset.top;
//             overlay.css({
//                 top: 0,
//                 left: 0,
//                 width: container.width(),
//                 height: container.height()
//             });
//             if (relX > container.width() - settings.inaccuracy) {
//                 overlay.css({
//                     top: 0,
//                     left: container.width(),
//                 });
//             } else if (relX < settings.inaccuracy) {
//                 overlay.css({
//                     top: 0,
//                     left: -container.width(),
//                 });
//             } else if (relY > container.width() - settings.inaccuracy) {
//                 overlay.css({
//                     top: container.width(),
//                     left: 0,
//                 });
//             } else if (relY < settings.inaccuracy) {
//                 overlay.css({
//                     top: -container.width(),
//                     left: 0,
//                 });
//             }
//             overlay.animate({
//                 top: 0,
//                 left: 0
//             }, settings.speed);
//         });

//         this.mouseleave(function (e) {
//             const container = $(this);
//             const overlay = container.find('.overlay');
//             const parentOffset = container.offset();
//             const relX = e.pageX - parentOffset.left;
//             const relY = e.pageY - parentOffset.top;
//             if (relX <= 0) {
//                 overlay.animate({
//                     top: 0,
//                     left: -container.width()
//                 }, settings.speed);
//             }
//             if (relX >= container.width()) {
//                 overlay.animate({
//                     top: 0,
//                     left: container.width()
//                 }, settings.speed);
//             }
//             if (relY <= 0) {
//                 overlay.animate({
//                     left: 0,
//                     top: -container.height()
//                 }, settings.speed);
//             }
//             if (relY >= container.height()) {
//                 overlay.animate({
//                     left: 0,
//                     top: container.height()
//                 }, settings.speed);
//             }
//         });
//     };
// }(jQuery));

// $(".snake").snakeify({
//     speed: 500    // Speed hover 
// });
// // end Gallery-Hover
// ==========================================================================================================================
// ===========================================================================================================================
$('.slider-1').owlCarousel({
    nav: true,
    dots: false,
    center: true,
    loop: true,
    margin: 50,
    responsiveClass: true,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    // rtl: true,
    autoHeight: true,
    autoHeightClass: 'owl-height',
    responsive: {

        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 2,
        }
    }
});

// ===========================================================================================================================

// ===========================================================================================================================

// ===========================================================================================================================
/* Validation Regx*/
// Name
var inputName = document.querySelector(".form-group .inputName");
var ErrorName = document.querySelector(".form-group .ErrorName");

function validationName() {
    var rgx = /^[a-zA-Z]{3,15}$/

    if (rgx.test(inputName.value) == true) {
        inputName.classList.add("is-valid");
        inputName.classList.remove("is-invalid");
        ErrorName.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        inputName.classList.add("is-invalid");
        inputName.classList.remove("is-valid");
        ErrorName.classList.replace("d-none", "d-block");
        return false;
    }
}
inputName.addEventListener("keyup", validationName);

// -------------
// Email
var inputEmail = document.querySelector(".form-group .inputEmail");
var ErrorEmail = document.querySelector(".form-group .ErrorEmail");

function validationEmail() {
    var rgx = /^[a-zA-Z]{3,15}$/

    if (rgx.test(inputEmail.value) == true) {
        inputEmail.classList.add("is-valid");
        inputEmail.classList.remove("is-invalid");
        ErrorEmail.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        inputEmail.classList.add("is-invalid");
        inputEmail.classList.remove("is-valid");
        ErrorEmail.classList.replace("d-none", "d-block");
        return false;
    }
}
inputEmail.addEventListener("keyup", validationEmail);

// -------------
// textarea

var inputTextarea = document.querySelector(".form-group .inputTextarea");
var ErrorTextarea = document.querySelector(".form-group .ErrorTextarea");

function textareaName() {
    var rgx = /^[a-zA-Z]{1,100}$/

    if (rgx.test(inputTextarea.value) == true) {
        inputTextarea.classList.add("is-valid");
        inputTextarea.classList.remove("is-invalid");
        ErrorTextarea.classList.replace("d-block", "d-none");
        inputTextareaNumder100();

        return true;
    }
    else {
        inputTextarea.classList.add("is-invalid");
        inputTextarea.classList.remove("is-valid");
        ErrorTextarea.classList.replace("d-none", "d-block");
        return false;
    }
}
inputTextarea.addEventListener("keyup", textareaName);

//------------------------------
function inputTextareaNumder100() {
    let max = 100;
    $(".inputTextarea").keyup(function () {
        let length = $(this).val().length;
        let character = max - length;

        if (character <= 0) {
            $("#max100").text("Sorry, there are only 100 numbers available");
        }
        else {
            $("#max100").text(character);
        }
    });
}




//addProduct ==> buttonده مش بيشتغل حاجه خالص غير لم اضغط علي ال
function btnMessage() {
    // 5	// ده علشان لم لو صح اطبع في المتصفح لو غلط ميطبعش حاجه if واعمل 
    if (validationName() && validationEmail() && textareaName() == true) {
        clearInputs();
    }
}

//clear ==> addProduct اللي اسم button لم بضغط علي inputده بيعمل مسح في ال
function clearInputs() {
    inputName.value = "";
    inputEmail.value = "";
    inputTextarea.value = "";
}

// ===========================================================================================================================



// ------------------------------------------------------------
const calcScrollValue = () => {
    const btn = document.querySelector("#ScrollToTop");

    const position = document.documentElement.scrollTop;
    const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const scrollValue = Math.round(Math.floor(position * 100) / calcHeight);

    position > 100 ? (btn.style.display = "grid") : (btn.style.display = "none");

    btn.addEventListener("click", () => {
        window.scrollTo(0, 0);
    });

    btn.style.background = `conic-gradient(#ad8e6d ${scrollValue}%, transparent ${scrollValue}%)`;
};

window.addEventListener("scroll", calcScrollValue);


// ===========================================================================================================================
// active

// $(function () {
//     $(".item-nav").click(function () {
//         $(".item-nav").removeClass("active-nav");
//         $(this).addClass("active-nav");
//     });
// });
// ===========================================================================================================================
let section = document.querySelectorAll('.section1');
let navLink = document.querySelectorAll('.box-cilsh-nav a');

window.onscroll = () => {
    section.forEach(
        sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLink.forEach(links => {
                    links.classList.remove('active-nav');
                    document.querySelector('.box-cilsh-nav a[href*=' + id + ']').classList.add
                        ('active-nav');
                })
            }
        }
    )
}

// ===========================================================================================================================

//ده علشان بوكس الالوان
let colorBoxWidth = $("#colorBox").outerWidth(); //colorBoxWidth واحطها في colorBoxانا كده بجيب عرض ال innerWidth

$("#sideBar").animate({ right: `-${colorBoxWidth}` }, 0); // يبقي جوه اول م افتح الموقع Boxده علشان ال

$("#sideBarToggle").click(function () {


    if ($('#sideBar').css("right") == "0px")//البوكس كده بره
    {
        $("#sideBar").animate({ right: `-${colorBoxWidth}` }, 2000);//right ب السالب ل colorBoxWidthكده لم اضغط علي الاعدادت داخل ال
    }
    else {
        $('#sideBar').animate({ right: `0px` }, 2000);//ده كده يبقي بره	0 = right ب sideBar انا كده بقول لو البوكس
    }

})

// --------------------
// ده علشان اضغط ع اي مكان يدخل البوكس الالون
for (var i = 0; i < section.length; i++) {
    section[i].addEventListener("click", test)
}

function test(e) {
    //console.log(e.target)
    if ($('#sideBar').css("right") == "0px") {
        $("#sideBar").animate({ right: `-${colorBoxWidth}` }, 2000);
    }
}

// ------------------------
//color 
for (let i = 0; i < $(".color-item").length; i++) {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    $(".color-item").eq(i).css("backgroundColor", `rgb(${red} ,${green} ,${blue} )`);
}

//بيغير بقي الالون اللي انت عايزه boxلم اضغط علي لون من الالون في ال
$(".color-item").click(function () {
    let bkgColor = $(this).css("backgroundColor");
    $(".color-css-js ,svg.radial-progress text").css("color", bkgColor)
    $("svg.radial-progress text").css("fill", bkgColor)
})

//-----------------------------
// Background-color-item

for (let i = 0; i < $(".Background-color-item").length; i++) {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    $(".Background-color-item").eq(i).css("backgroundColor", `rgb(${red} ,${green} ,${blue} )`);
}

//بيغير بقي الالون اللي انت عايزه boxلم اضغط علي لون من الالون في ال
$(".Background-color-item").click(function () {
    let bkgColor = $(this).css("backgroundColor");
    $(".bg-css-js").css("background", bkgColor)
})

//-----------------------------
// Background-img

$(".box-image img").click(function () {
    // window.alert('Hello');	// test بعمل 
    let imgSrc = $(this).attr("src");

    $(".header").css("backgroundImage", `url(${imgSrc})`);

});





// ===========================================================================================================================

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particles.json', function () {
    console.log('callback - particles.js config loaded');
});

// ===========================================================================================================================


// Animate
AOS.init();

// ===========================================================================================================================

/* Achievements */
function dt_counterFlip() {
	
    var oTop = $('.counterTop').offset().top - window.innerHeight;
    $(window).bind('scroll', function() {
        var pTop = $(this).scrollTop();

        if (pTop > oTop) {
            $(window).unbind('scroll');
            $('.count', '.counterTop').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    });


}
$(document).ready(function() {
dt_counterFlip();
});
// ===========================================================================================================================











// ===========================================================================================================================
// document.addEventListener("keydown", function (eventInfo) {
//     console.log(eventInfo);
// }


// ===========================================================================================================================
/* clock */



// ===========================================================================================================================
/* About */
// ===========================================================================================================================
// ===========================================================================================================================

// pwa
window.addEventListener('load', () => {
    registerSW();
  });

  // Register the Service Worker
  async function registerSW() {
    if ('../serviceWorker' in navigator) {
      try {
        await navigator
              .serviceWorker
              .register('../serviceworker.js');
      }
      catch (e) {
        console.log('SW registration failed');
      }
    }
  }

  
//=============================================
//يتحرك بشكل جميل navbarده علشان لم اضغط علي اي لينك في ال
//  $("a[href^='#']").click(function() {
// 	let aHref = $(this).attr("href");
// 	let sectionOffset = $(aHref).offset().top;
// 	$("html,body").animate({scrollTop:sectionOffset} , 2000);
// });

//=============================================