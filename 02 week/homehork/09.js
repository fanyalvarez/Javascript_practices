/* elaborar un programa que pida una cadena de caracteres poerteriormente por cada elemento evalue si es voval o no dedeberas crear un objeto literar por cada caracter por ejemplo 
cadena=' hola mundo '
{
    caracter 'h'
    esVocal false
}*/
console.log('hola')
const buscarVocal = (cadena) => {
    const vocales = ['a', 'e', 'i', 'o', 'u']
    let resultado = []

    for (let index = 0; index < cadena.length; index++) {
        const caracter = cadena[index].toLowerCase()
        if (caracter != ' ') {

            let esVocal = vocales.findIndex((vocal) => vocal === caracter)
            // console.log(esVocal)
            let objetoLiteral = {
                caracter: cadena[index],
                esVocal: false
            }
            if (esVocal != -1) {
                objetoLiteral.esVocal = true
            }
            resultado.push(objetoLiteral)
        }
    }
    return resultado
}
const cadena = 'hOla hola'
console.log(buscarVocal(cadena))

const buscarVocal2 = (cadena) => {
    let caracteres = Array.from(cadena)
    const result = caracteres.map((caracter) => {
    return {
        caracter,
        esVocal: (/[aeiou]/i).test(caracter.toLowerCase())
    }
})
return result
}
console.log(buscarVocal(cadena))
