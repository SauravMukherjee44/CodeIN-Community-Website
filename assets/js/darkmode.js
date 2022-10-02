// icon feather
feather.replace()
// =======================================================
// toggler
$('.menu-toggler input').click(function () {
    $('.nav').toggleClass('appear');
});
// =======================================================
// darkmode
$('.darkmode button').click(function () {
    $('body').toggleClass('dark');
    $('.feather.sun').toggleClass('appear');
    $('.feather.moon').toggleClass('hide');
    $('.darkmode').toggleClass('whitebg');
    $('.darkmode button').toggleClass('wh');
    $('nav a').toggleClass('whitecr');
    $('.menu-toggler span').toggleClass('whiteburger');
    $('p').toggleClass('whitecr');
    $('h1').toggleClass('whitecr');
    $('h2').toggleClass('whitecr');
    $('h3').toggleClass('whitecr');
    $('h4').toggleClass('whitecr');
    $('h5').toggleClass('whitecr');
    $('ul li').toggleClass('whitecr');
});