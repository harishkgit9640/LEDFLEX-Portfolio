$(document).ready(function () {
    let dt = new Date();
    $('#year').html(dt.getFullYear());

    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }
        else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    // menu toggle class
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing Animation script

    var typed = new Typed(".typing", {
        strings: ["Custom Solutions", "Extensive Variety", "Long-term Promise"],
        typeSpeed: 50,
        backSpeed: 60,
        loop: true
    });


    // Open modal when clicked on Subscribe button
    $('#showModal').click(function () {
        $(".modal").show();
    });
    // close modal when clicked X
    $('#closeModal').click(function () {
        $(".modal").hide();
    });




});