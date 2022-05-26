//Calcula la edad de tus companeros
let edades = [24, 42, 28, 25, 26, 31, 25, 31, 33, 28, 31, 39, 27, 32, 24, 39, 42, 35, 22]

//let contador = 0
//let suma = 0

// while (contador < edades.length) {

//     const edad = edades[contador]
//     suma = suma+edad
//     contador++
//    // console.log(suma)
// }
// const promedio = suma / edades.length
// console.log(promedio)
// console.log(`The average is ${promedio}`)

//Dado un numero obten la tabla de multiplicar
//let number = prompt('Enter a number')
let number = 5
let counter = 1

while (counter <= 10) {
    let table = number * counter
    console.log(`${number} x ${counter} = ${table}`)
    counter++
}



//Muestra la suma de los numeros impares del 1 al 100
let number3 = 1
let counter3 = 1
let add3 = 0

while (counter3 <= 50) {

    if (number3 % 2 == 1) {
        add3 = add3 + number3
        //console.log(number3)
        counter3++
    }
    number3 = number3+1
}
console.log(add3)


//Muestra los primeros 100 numeros enteros iniciando desde el 1
