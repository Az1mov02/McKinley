// =====  Slider   ===============================================================

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
// =========   Burger-menu || HEADER  ================================= //

const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu-body");
const contact = document.querySelector(".header-contact");

if(burgerMenu){
  burgerMenu.addEventListener('click', function(e){
    burgerMenu.classList.toggle("_open");
    menu.classList.toggle("_open");
    contact.classList.toggle("_open");
    document.body.classList.toggle("_lock");
    if (document.getElementById("logo").src === "http://localhost:8848/img/logo.svg") {
      document.getElementById("logo").src = "img/white.svg";
    } else {
      document.getElementById("logo").src = "img/logo.svg";
    }
  })
}












