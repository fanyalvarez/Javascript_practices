console.log('-----Ex 1 comprobar si un numero es par------')
const numeroPar = 10

const esNumeroPar = (numeroPar) => {
    if (numeroPar % 2 == 0) {
        return true
    } else {
        return false
    }
}
console.log(esNumeroPar(numeroPar))


console.log('-----Ex 2 imprimir en pantalla todos los divisores de 1 a 100 de un numero entero------')
const number = 2

for (let index = 1; index <= 20; index++) {
    const divisor = (number) => (index % number == 0)
    if (divisor(number)) {
        console.log(divisor(number))
    }
}


console.log('-----Ex 3 comprobar si un numero es primo------')
const numeroPrimo = 8

const esPrimo = (numeroPrimo) => {
    if (numeroPrimo % 2 == 1) {
        return true
    } else {
        return false
    }
}
console.log(esPrimo(numeroPrimo))
