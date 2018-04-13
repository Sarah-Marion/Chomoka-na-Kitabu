// var indexPos = 0;
var customerArray = [];
var customerObj = {};
var customersdata;
var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
$(document).ready(function () {
    // This facilitates smooth scrolling using jQuery easing
    $('a.smooth-scroll[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
    // Closes responsive menu when a smooth scroll class is triggered
    // this is for small screens with small pixel widths
    $('.smooth-scroll').click(function () {
        $('.navbar-collapse').collapse('hide');
    });
    //Scroll to the top
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#navMain',
        offset: 54
    });

    // Collapse Navbar when the scroll is triggered
    var navbarCollapse = function () {
        if ($("#navMain").offset().top > 100) {
            $("#navMain").addClass("navbar-shrink");
        } else {
            $("#navMain").removeClass("navbar-shrink");
        }
    };
    // Collapse the nav bar if page is not at the top
    navbarCollapse();
    // Collapse the navbar when there is scroll activity
    $(window).scroll(navbarCollapse);
    // showSlides(slideIndex);
    // bookSlides();

    // Mail Chimp Functions
    (function ($) {
        window.fnames = new Array();
        window.ftypes = new Array();
        fnames[0] = 'EMAIL';
        ftypes[0] = 'email';
    }($));
    var $mcj = $.noConflict(true)

    $('form.modal-content').submit(function (event) {
        event.preventDefault();
        var fn = $('#fn').val();
        var ln = $('#ln').val();
        var pn = $('#pn').val();
        var e = $('#e').val();
        var addr = $('#ad').val();

        var customerObj = {
            firstname: fn,
            lastname: ln,
            phonenumber: pn,
            email: e,
            address: addr
        };
        customerArray.push(customerObj);

        localStorage.setItem('customersRecord', JSON.stringify(customerArray));
        alert("customer successfully registered!");

    });
    customersdata = localStorage.getItem('customersRecord');
    // console.log(customersdata);
    var xy = 3;
    var xz = 0;
    for (i = 0; i < books.length; i++) {
        var catArr = books[i];

        var bookDiv = $("<div id=content" + i + " class='col-md-4 bk-btn'>");
        if (xy >= 3) {
            xz++
            var bookRow = $("<div class='row bookstock rowbooks" + xz + "'>");
            $("#wrapper").append(bookRow);
            xy = 0
        } else {
            xy++;
            $(".rowbooks" + xz).append(bookDiv);
            $("#content" + i).append('<button class="btn btn-info makeorder" id=' + i + '>' + "Category : " + books[i].category + "<br>" + "Title : " + books[i].title + "<br>" + "ISBN-Number : " + books[i].isbn_number + "<br>" + "Reviewed : " + books[i].review + "<br>" + "<a id='ord'>click to order book.</a></button>");
        }

    };
    $("button.makeorder").click(function () {
        var id = $(this).attr("id");
        $('#myModal').appendTo("body").modal();
    });
    $("#orderbook").submit(function (event) {
        event.preventDefault();
        alert('book ordered successifully!')
    })

    $("#myinput").keyup(function (e) {
        var filter = ($(this).val()).toUpperCase();
        var li = $("#wrapper div.row .col-md-4 .makeorder");
        console.log(li);

        for (i = 0; i < li.length; i++) {
            var a = ($('button.makeorder')[i]);
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                $("#found").html("searching " + filter.toLowerCase() + " book!");
                li[i].style.display = "";

            } else {
                li[i].style.display = "none";

            }
        }

    });
    $('.carousel[data-type="multi"] .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
      
        for (var i=0;i<2;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        }
    });

});