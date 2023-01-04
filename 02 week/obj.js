//crear un programa que registre N cantidad de estudiantes cada estudiante tiene un nombre, apellido , matricula, promedio. los datos deben ser guardados en un arreglo de objetos literales, ademas de preguntarsi desea registrar mas o no

// let text
// const data = [
//     {
//         name: '',
//         lastName: '',
//         registration: 0,
//         average: 0,
//     },
// ]
// while (confirm("You want to add a student?") == true) {
//     let name = prompt(`name:`)
//     let lastName = prompt(`lastname:`)
//     let registration = prompt(`registration:`)
//     let average = prompt(`average:`)
//     data.push({
//         name, lastName, registration, average,
//     })
// }
// console.log(data)

let text
let students = []

while (confirm("You want to add a student?") == true) {
    const data = {
        name: '',
        lastName: '',
        registration: 0,
        average: 0,
    }
    data.name = prompt(`name:`)
    data.lastName = prompt(`lastname:`)
    data.registration = prompt(`registration:`)
    data.average = prompt(`average:`)
    students.push(data)
}
console.log(students)