//menu
$('.menu-controlar').click(() => {
    $('.main-menu').css('padding-top', '5px').slideToggle(300);
});

//slide 
let slideLength = $('#slide2 .slide').length,
    slideControlRight = 0,
    slideControlLeft = 0;
$('#slide2 .left').click(() => {
    slideControlLeft--;
    if (slideControlLeft == -1 || slideControlLeft == 1) {
        $('#slide2 .slide:nth-child(1)').css('animation', 'ACTIVE3 0.5s forwards');
        $('#slide2 .slide:nth-child(' + slideLength + ')').addClass('active3');
        setTimeout(() => {
            $('#slide2 .slide:nth-child(1)').removeClass('active');
            $('#slide2 .slide:nth-child(1)').css('animation', '');
            $('#slide2 .slide:nth-child(' + slideLength + ')').removeClass('active3');
            $('#slide2 .slide:nth-child(' + slideLength + ')').addClass('active');
            slideControlLeft = slideLength + 1;
            slideControlRight = slideControlLeft - 2; //for right slide
        }, 500);
    } else {
        $('#slide2 .slide:nth-child(' + slideControlLeft + ')').css('animation', 'ACTIVE3 0.5s forwards');
        $('#slide2 .slide:nth-child(' + (slideControlLeft - 1) + ')').addClass('active3');
        setTimeout(() => {
            $('#slide2 .slide:nth-child(' + slideControlLeft + ')').removeClass('active');
            $('#slide2 .slide:nth-child(' + slideControlLeft + ')').css('animation', '');
            $('#slide2 .slide:nth-child(' + (slideControlLeft - 1) + ')').removeClass('active3');
            $('#slide2 .slide:nth-child(' + (slideControlLeft - 1) + ')').addClass('active');
        }, 500);
        slideControlRight = slideControlLeft - 2; //for right slide
    };
});

$('#slide2 .right').click(() => {
    slideControlRight++;
    if (slideControlRight == slideLength) {
        $('#slide2 .slide:nth-child(' + slideControlRight + ')').css('animation', 'ACTIVE1 0.5s forwards');
        $('#slide2 .slide:nth-child(1)').addClass('active2');
        setTimeout(() => {
            $('#slide2 .slide:nth-child(' + slideControlRight + ')').removeClass('active');
            $('#slide2 .slide:nth-child(' + slideControlRight + ')').css('animation', '');
            $('#slide2 .slide:nth-child(1)').removeClass('active2');
            $('#slide2 .slide:nth-child(1)').addClass('active');
            slideControlRight = 0;
            slideControlLeft = 2; //for left slide
        }, 500);
    } else {
        $('#slide2 .slide:nth-child(' + slideControlRight + ')').css('animation', 'ACTIVE1 0.5s forwards');
        $('#slide2 .slide:nth-child(' + (slideControlRight + 1) + ')').addClass('active2');
        setTimeout(() => {
            $('#slide2 .slide:nth-child(' + slideControlRight + ')').removeClass('active');
            $('#slide2 .slide:nth-child(' + slideControlRight + ')').css('animation', '');
            $('#slide2 .slide:nth-child(' + (slideControlRight + 1) + ')').removeClass('active2');
            $('#slide2 .slide:nth-child(' + (slideControlRight + 1) + ')').addClass('active');
        }, 500);
        slideControlLeft = slideControlRight + 2; //for left slide
    };
});

//question
$('.questions li> h3').click(function () {
    $('.questions li> h3').css({
        'border': 'none',
        'border-bottom': '1px solid rgb(209, 209, 209)'
    })
    $('.questions li:last-child>h3').css('border-bottom', 'none')
    $(this).css('border', '3px solid red')
    $(this).next().slideToggle(300)
    $(this).parent().toggleClass('click')
})