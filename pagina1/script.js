
const meuBotao = document.getElementById("meuBotao")
function redirecionar() {

 window.location.href = "https://uudt-ma.github.io/img/regra/regra5.jpg"
}

meuBotao.addEventListener("click", redirecionar)


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
