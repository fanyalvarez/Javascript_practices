console.log("---Ex. 1 Calcula la edad de tus companeros---")
let edades = [24, 42, 28, 25, 26, 31, 25, 31, 33, 28, 31, 39, 27, 32, 24, 39, 42, 35, 22]
let contador = 0
let suma = 0
while (contador < edades.length) {
    const edad = edades[contador]
    suma = suma + edad
    contador++
    // console.log(suma)
}
const promedio = suma / edades.length
console.log(promedio)
//console.log(`The average is ${promedio}`)


console.log("---Ex. 2 Dado un numero obten la tabla de multiplicar----")
//let number = prompt('Enter a number')
let number = 5
let counter = 1
while (counter <= 10) {
    let table = number * counter
    console.log(`${number} x ${counter} = ${table}`)
    counter++
}


console.log("---Ex. 3 Muestra la suma de los numeros impares del 1 al 100---")
let number3 = 1
let counter3 = 1
let add3 = 0
while (counter3 <= 50) {
    if (number3 % 2 == 1) {
        add3 = add3 + number3
        console.log//console.log(number3)
        counter3++
    }
    number3 ++
}
console.log(add3)


console.log("---Ex. 4 Muestra los primeros 100 numeros enteros iniciando desde el 1---")
let number4 = 1
let counter4 = number4
let add4 = 1
while (counter4 <= number4 + 10) {
    console.log(counter4)
    counter4++
}


console.log("---Ex. 5 Dado un numero natural n obtener su factorial---")
let number5 = 4
let factorial = 1
console.log(`number ${number5}`) 
do {
    factorial = factorial * number5
    // console.log(`${number5} * ${factorial}`)
    number5--
} while (number5 > 0);

console.log(`factorial ${factorial}`)


console.log("---Ex. 6 Dado un numero N imprime todos los valores iniciales desde el 0 hasta el numero mencionado---")
//let number6 = prompt('Ingresa un numero ')
let number6 = 5
let counter6 = 0
do {
    console.log(counter6)
    counter6++
} while (counter6 <= number6);


console.log("---Ex. 7 Escribir un algoritmo que escriba 300 veces -Hola soy... ---")

for (let index = 1; index <= 10; index++) {
  console.log(`${index} My name is Fany`)
}


console.log("---Ex. 8 Algoritmo que imprima las 10 primeras potencias de un valor dado---")
let number8 = 3
let potencia = 0
for (let index = 0; index < 10; index++) {
    potencia = number8 ** index
    console.log(potencia)
}


console.log("--Ex. 9 Mintras que el valor sea positivo sumar los datos")

let number9
let sum9 = 0

do{
    number9=parseInt(prompt("---Ex. 9 Ingresa un numero positivo---"))
    if(number9>0){
        sum9=sum9+number9}
}while(number9>0)

console.log(sum9)