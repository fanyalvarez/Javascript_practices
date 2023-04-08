//clase 06-03-22

//boton on click
const saludoEl = document.getElementById('saludo')

const saludarBtn = (event) => {
    const solicitud = prompt('ingresa tu nombre')
    saludoEl.innerText = `Hola ${solicitud}`
}

// on doble click
const contarEl = document.getElementById('contador')
let contador = 0

const contarBtn = (event) => {
    contador++
    contarEl.innerText = contador
}


//imagen
const coralineEl = document.getElementById('coraline')
const mouseEntra = (event)=>{
    coralineEl.classList.add('animate__animated','animate__rotateIn','animate__infinite' )
}

const mouseSale =(event)=>{
    coralineEl.classList.remove('animate__animated','animate__rotateIn','animate__infinite')
}

const mouseCoraline = (event)=>{
    console.log(event.type)
    if (event.type == 'mouseenter') {
    coralineEl.classList.add('animate__animated','animate__rotateIn','animate__infinite' )   
    } else {
    coralineEl.classList.remove('animate__animated','animate__rotateIn','animate__infinite')
    }
}