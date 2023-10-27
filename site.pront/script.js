
const meuBotao = document.getElementById("meuBotao")
function redirecionar1() {

 window.location.href = "https://ogimg.infoglobo.com.br/in/21842409-d69-5f4/FT1086A/Benegay.jpg"
}

meuBotao.addEventListener("click", redirecionar1)


const botao = document.getElementById("dropdown-button");
const menu = document.getElementById("dropdown-menu");



botao.addEventListener("click",  function (){
       
   
       /*
       if ( menu.style.display === "none") {
             menu.style.display = "flex"
             menu.style.flexDirection = "column"
       }else {
        menu.style.display = "none"
       }
       */
      console.log("funfou")
       menu.classList.toggle("mostrar")
     
})

/*
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
*/

const trailer = document.getElementById("trailer")
function redirecionar() {

 window.location.href = "https://youtu.be/gZtmzT9Wgrw?si=v0IhXQhSn3ZilZLH"
}

trailer.addEventListener("click", redirecionar)