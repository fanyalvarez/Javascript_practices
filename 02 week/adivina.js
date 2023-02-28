/*Crea un prigrama que permita adivinar un numero. La aplicacion genera un numero aleatorio del 1 al 100. 
Acontinuacion va pidiendo nmeros y va rspondiendo si el numero a adivinar es mayor o menor que el introducido, 
a demas de los intentos que te quedan(10 intentos)el programa termina cuando se acierta el numero y te dice a los cuantos intentos 
lo haz logrado, si llega al limite te muesta el numero a adivinar*/

const generarNumeroAleatorio = (min, max) => {
    const numero = Math.random(1, 100) * (max - min) + min;
    return Math.round(numero);
}
// console.log(generarNumeroAleatorio(0,10))

const aleatorio = generarNumeroAleatorio(1, 10)
console.log(aleatorio)

let contador = 0
let numeroIngresado = 0

while (numeroIngresado != aleatorio && contador <= 9) {

    contador++
    console.log(contador)

    numeroIngresado = prompt('Enter a number')

    if (numeroIngresado < aleatorio) {
        alert('el numero debe ser mayor')
    }
    if (numeroIngresado > aleatorio) {
        alert('el numero debe ser menor')
    }
    if (numeroIngresado == aleatorio) {
        alert(`encontraste el numero ${aleatorio} a los ${contador} intentos`)
    }
}
alert(`se te acabaron los intentos el numero a encontrar era el ${aleatorio}`)












