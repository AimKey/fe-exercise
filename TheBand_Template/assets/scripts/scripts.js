
var count = 0;
var imgList = document.querySelectorAll('.carousel__imgs');
carouselTranslation();

function carouselTranslation() {
    if(count > 0 && count <= 2) {
        imgList[count - 1].classList.toggle('hide');
    } else if (count > 2) {
        imgList[count - 1].classList.toggle('hide');
        count = 0;
    }
    imgList[count].classList.toggle('hide');
    count++;
    setTimeout(carouselTranslation, 2000);
}



function hamburgerButton (element) {
    var target = document.querySelector('.hamburger__menu');
    console.log(target);
    target.classList.toggle("hide");
}