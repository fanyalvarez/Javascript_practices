//crear un programa que registre N cantidad de estudiantes cada estudiante tiene un nombre, apellido , matricula, promedio. los datos deben ser guardados en un arreglo de objetos literales, ademas de preguntarsi desea registrar mas o no

// let question = prompt('desea agregar a un estudiante?')
let text
const data = [
    {
        name: 'fany',
        lastName: 'alvarez',
        registration: 1234567,
        average: 7.5
    },
]
if (confirm("You want to add a student?") == true) {

    let name = prompt(`name:`)
    let lastName = prompt(`lastname:`)
    let registration = prompt(`registration:`)
    let average = prompt(`average:`)
    data.push({
        name, lastName, registration, average,
    })
}
console.log(data)