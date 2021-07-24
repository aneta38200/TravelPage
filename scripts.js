$(document).ready(function(){
    $('.menu-toggler').click(function(){
        $(this).toggleClass("fa-times");
        $(".navbar-menu").toggleClass("active");
        $(".menu-toggler").toggleClass("active");
    });
});