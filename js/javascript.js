///////////////////// navbar swith active 
$("nav li").on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
})


///////////////////// button to top 
var scrollButtom = $("#buttom-up");
$(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
        scrollButtom.fadeIn(1000);
    } else if ($(this).scrollTop() <= 300) {
        scrollButtom.fadeOut(1000);
    }
})
scrollButtom.click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 1000);
})


///////////////////// sidbar button 
$(document).ready(function () {
    $("header i").click(function () {
        $(this).toggleClass("fa-align-left fa-times");
    })
});


///////////////////// loding animation
window.onload = function(){
$(".loading-overlay .spinner").fadeOut(6000, function () {
    $(this).parent().fadeOut(2000, function () {
        $("body").css("overflow", "auto")
        $(".loading-overlay").remove()
    })
})
}  



///////////////////// animation on scroll for my skills 
let section = document.querySelector(".wrapper-skills");
let progress = document.querySelectorAll(".wrapper-skills .progress");

window.onscroll = function() {
    if(window.scrollY >= section.offsetTop){
        progress.forEach(function (ele) {
            ele.style.width = ele.dataset.width ;
        })
    }else if(window.scrollY <= section.offsetTop -100){
        progress.forEach(function (ele) {
            ele.style = "width : 0";
        })
    }
}

