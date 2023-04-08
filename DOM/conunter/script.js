
// contador mas y menos
const counter = document.getElementById('counter')
const add = document.getElementById('add')
const subtract = document.getElementById('subtract')
const reset = document.getElementById('reset')
let count = 0
add.addEventListener('click', (event) => {
    count++
    counter.innerText = count
})
subtract.addEventListener('click', (event) => {
    count--
    counter.innerText = count
})
reset.addEventListener('click', (event) => {
    counter.innerText = ('0')
})

//teclado
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 39) {
        count++
        counter.innerText=count
    }
    if (event.keyCode === 37) {
        count--
        counter.innerText=count
    }
})


//calculadora con teclado
const result = document.getElementById('result')
let countCalc
document.addEventListener('keydown',(event)=>{
    if (event.keyCode === 48) {
        countCalc = 0
        result.innerText=countCalc
    }
    if (event.keyCode === 49) {
        countCalc = 1
        result.innerText=countCalc
    }
    if (event.keyCode === 50) {
        countCalc = 2
        result.innerText=countCalc
    }
    if (event.keyCode === 51) {
        countCalc = 3
        result.innerText=countCalc
    }
    if (event.keyCode === 52) {
        countCalc = 4
        result.innerText=countCalc
    }
    if (event.keyCode === 53) {
        countCalc = 5
        result.innerText=countCalc
    }
    if (event.keyCode === 54) {
        countCalc = 6
        result.innerText=countCalc
    }
    if (event.keyCode === 55) {
        countCalc = 7
        result.innerText=countCalc
    }
    if (event.keyCode === 56) {
        countCalc = 8
        result.innerText=countCalc
    }
    if (event.keyCode === 57) {
        countCalc = 9
        result.innerText=countCalc
    }



    
})



// calculadora con click
/*

const ac      = document.getElementById("ac      ")
const porcent = document.getElementById("porcent ")
const division= document.getElementById("division")
const seven   = document.getElementById("seven   ")
const eight   = document.getElementById("eight   ")
const nine    = document.getElementById("nine    ") 
const multi   = document.getElementById("multi   ")
const four    = document.getElementById("four    ") 
const five    = document.getElementById("five    ") 
const six     = document.getElementById("six     ") 
const resta   = document.getElementById("resta   ") 
const one     = document.getElementById("one     ") 
const two     = document.getElementById("two     ") 
const three   = document.getElementById("three   ") 
const suma    = document.getElementById("suma    ") 
const cero    = document.getElementById("cero    ") 
const punto   = document.getElementById("punto   ") 
const igual   = document.getElementById("igual   ") 


// class   .addEventListener('click', (event)=> {
//     countCalc
//     result.innerText =countCalc

// })
ac.addEventListener('click', (event)=> {
    countCalc
    result.innerText =countCalc

})
porcent .addEventListener('click', (event)=> {
    countCalc
    result.innerText =countCalc

})
division.addEventListener('click', (event)=> {
    countCalc
    result.innerText =countCalc

})
seven   .addEventListener('click', (event)=> {
    countCalc
    result.innerText =countCalc

})
eight   .addEventListener('click', (event)=> {
    countCalc
    result.innerText =countCalc

})
nine    .addEventListener('click', (event)=> {
    countCalc
    result.innerText =countCalc

})
multi   .addEventListener('click', (event)=> {
    countCalc
    result.innerText =countCalc

})
four    .addEventListener('click', (event)=> {
    countCalc
    result.innerText =countCalc

})
five    .addEventListener('click', (event)=> {
    countCalc
    result.innerText =countCalc

})
six     .addEventListener('click', (event)=> {
    countCalc
    result.innerText =countCalc

})
resta   .addEventListener('click', (event)=> {
    countCalc
    result.innerText =countCalc

})
one     .addEventListener('click', (event)=> {
    countCalc
    result.innerText =countCalc

})
two     .addEventListener('click', (event)=> {
    countCalc
    result.innerText =countCalc

})
three   .addEventListener('click', (event)=> {
    countCalc
    result.innerText =countCalc

})
suma    .addEventListener('click', (event)=> {
    countCalc
    result.innerText =countCalc

})
cero    .addEventListener('click', (event)=> {
    countCalc
    result.innerText =countCalc

})
punto   .addEventListener('click', (event)=> {
    countCalc
    result.innerText =countCalc

})
igual   .addEventListener('click', (event)=> {
    countCalc
    result.innerText =countCalc

})
*/