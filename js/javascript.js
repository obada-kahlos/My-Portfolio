///////////////////// navbar swith active 
$("header nav li").on('click', function () {
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
$(".loading-overlay .spinner").fadeOut(4000, function () {
    $(this).parent().fadeOut(3000, function () {
        $("body").css("overflow", "auto")
        $(".loading-overlay").remove()
    })
})
}  



///////////////////// animation on scroll for my skills 
let section = document.querySelector(".wrapper-skills");
let progress = document.querySelectorAll(".wrapper-skills .progress");

window.onscroll = function() {
    if(window.scrollY >= section.offsetTop -100){
        progress.forEach(function (ele) {
            ele.style.width = ele.dataset.width ;
        })
    }else if(window.scrollY <= section.offsetTop -100){
        progress.forEach(function (ele) {
            ele.style = "width : 0";
        })
    }
}


///////////////////// suffil my project [Portfolio]
let portfolioList = document.querySelectorAll(".my-portfolio ul li");
let itembox = document.querySelectorAll('.work');

for(let i = 0; i<=portfolioList.length;i++){

    portfolioList[i].addEventListener('click' , function(){

        for(let j = 0; j<portfolioList.length;j++){
            portfolioList[j].classList.remove('active');
        }
        this.classList.add('active');

        let datafillter = this.getAttribute('data-fillter');
  
        for(let n = 0;i<itembox.length;n++){
            itembox[n].classList.remove('active');
            itembox[n].classList.add('hide');
        
            if(itembox[n].getAttribute('data-item') == datafillter || datafillter == 'all'){
                itembox[n].classList.remove('hide');
                itembox[n].classList.add('active');
            }
        }
    })
}
