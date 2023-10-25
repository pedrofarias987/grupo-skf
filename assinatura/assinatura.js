const butao1 = document.getElementById("Butao1")
const butao2 = document.getElementById("Butao2")
const butao3 = document.getElementById("Butao3")
function redirecionar() {
console.log("funfou")
 window.location.href = "http://127.0.0.1:5500/Streaming/Assinaturas/urubudopix.html"
}

butao1.addEventListener("click", redirecionar)
butao2.addEventListener("click", redirecionar)
butao3.addEventListener("click", redirecionar)