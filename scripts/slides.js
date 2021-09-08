
$('.customer__slide .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:["","<p class='slide__next--text'>Trượt ngang để xem thêm</p>"],
    margin:36,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        900:
        {
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
});

$('#company__img .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:["","<p class='slide__next--text'>Trượt ngang để xem thêm</p>"],
    margin:36,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        900:
        {
            items:2
        },
        1000:{
            items:4
        },
        1200:{
            items:4
        }
    }
});


$('.reason__slide .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:["<img class='prev--dark' src='../uploads/left-arrow-gray.svg'><img class='prev--white' src='../uploads/left-arrow.svg'>","<img class='next--gray' src='../uploads/next-gray.svg'><img class='next--white' src='../uploads/next.svg'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        900:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:3
        }
    }
});

new WOW(
    {
        mobile: false,
    }
).init();
