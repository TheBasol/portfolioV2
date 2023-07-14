// Animaciones
AOS.init();

let menu = document.getElementById('menu');
let menuBar = document.getElementById('menu-bar');

menuBar.addEventListener("click", () =>{
    menu.classList.toggle("menu-toggle");
})

const maquina = document.getElementById('maquina-escribir')


const maquinaEscribir = (text = '',tiempo = 200, etiqueta = '') => {
  let arrayCaracteres = text.split('')
  etiqueta.innerHTML = ''
  let cont = 0
  let escribir = setInterval(function(){
    etiqueta.innerHTML += arrayCaracteres[cont]
    cont++
    if (cont === arrayCaracteres.length) {
      clearInterval(escribir)
    }
  }, tiempo)
  }
  
  maquinaEscribir("Enrique Vazquez",200, maquina)

