console.log(`holi`)
// crea un programa que determina el area de un triangulo-- b*h/2

//let base = prompt(`base`)
//let altura = prompt(`altura`)
let base = 10
let altura = 10
const calculo = (base * altura )/2
console.log(`area del triangulo ${calculo}`)



//Un vendedor quetiene su sueldo base, recibe ademas una comison del 5% del total de sus ventas del mes.El mes de julio realizo 2 ventas, el quiere saber cuanto ganara en el mes de julio 

let sueldo = 10000
let porcentaje = .05
let ventas = 2
let total = sueldo + (sueldo * (porcentaje * ventas))

console.log(`sueldo mas comision  ${total}`)



//un empleado tuvo un aumento del 10% de su sueldo, necesita saber cual sera el total de su nuevo sueldo 

let saldoAnterior = 10000
let aumento = .10
let nuevoSalario = saldoAnterior * aumento + saldoAnterior
console.log(`Nuevo salario ${nuevoSalario}`)


//dado 3 numeros escribir el mayor
let numberOne = 3
let numberTwo = 6
let numberThree = 10

let compOne = numberOne > numberTwo ? numberOne : numberTwo
let compTwo = compOne > numberThree ? compOne : numberThree

console.log(`Between ${numberOne} ${numberTwo} ${numberThree} the number more big is ${compTwo}`)


//siendo un numero dentro del rango (0-999) determinar cuantos digitos tiene
let number = 5
if (number < 10) {
 console.log(`The number ${number} have a digit`)   
} 
else if (number > 10 && number < 99) {
    console.log(`The number ${number} have two digits`)   
} else{
    console.log(`The number ${number} have three digits`)  
}


//dado un numero entero determinar si es par o impar
let numb = 10
let calculate = numb % 2
let parOrImpar = calculate === 1 ? console.log(`The number ${numb} is impar`) : console.log(`The number ${numb} is par`)
