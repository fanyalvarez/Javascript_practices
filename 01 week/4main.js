console.log('-----Ex 1 comprobar si un numero es par------')
const numero = 10

const esNumeroPar = (numero) => {
    if (numero % 2 == 0) {
        return true
    } else {
        return false
    }
}
console.log(esNumeroPar(numero))


console.log('-----Ex 2 imprimir en pantalla todos los divisores de 1 a 100 de un numero entero------')
const number = 5


const divisor = (number) => {
    for (let index = 0; index < 100; index++) {
        console.log(index)
        if ((index % number) === 0) {
            console.log(divisor)
        }
    }
}


console.log('-----Ex 3 comprobar si un numero es primo------')

const primo = 8

const esPrimo = (numero) => {
    if ((numero % 2) == 1) {
        return true
    } else {
        return false
    }
}
console.log(esPrimo(primo))
