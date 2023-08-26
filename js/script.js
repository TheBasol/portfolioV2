// animations
AOS.init();

let menu = document.getElementById('menu');
let menuBar = document.getElementById('menu-bar');

menuBar.addEventListener("click", () =>{
    menu.classList.toggle("menu-toggle");
})

// animation text
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

// background main

let containerAnimation = document.getElementsByClassName('container-animation')[0] 

let positions = ['15%','25%','30%','35%','40%','50%','60%','75%','85%']
let colors = ['#332FFF','#fff','#AAB1F2','#482ebb']
let list_delay = ['0','1s','2s','3s','4s','6s']
const isPC = !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
let items = isPC ? 14 : 6

const fragment = document.createDocumentFragment();

for (let i = 1; i <= items; i++) {

  let color = colors[Math.floor(Math.random() * colors.length)]
  let positionsToBox = [ positions[Math.floor(Math.random() * positions.length)], positions[Math.floor(Math.random() * positions.length)]]
  let delay = list_delay[Math.floor(Math.random() * list_delay.length)]

  let box = document.createElement('div')
  box.classList.add('box')
  box.style.top = positionsToBox[0]
  box.style.left = positionsToBox[1]
  box.style.border = '1px solid' + color
  box.style.animationDelay = delay

  fragment.appendChild(box)
}

containerAnimation.appendChild(fragment)





