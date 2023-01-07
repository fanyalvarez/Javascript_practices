import Carro from "./Carro.js";

const carro1 = new Carro('rojo', 'model 3', 'tesla', '123', 'gaby', 'nuevo')
const carro2 = new Carro('negro', 'chiron', 'bugatti', '321', 'arnold', 'nuevo')

console.log(carro1.toJson()) 
console.log(carro2.toObjetoLiteral())

carro1.encender()
carro2.encender()

carro1.iniciarGrabacion()
carro2.iniciarGrabacion()

console.log(carro1.dueno)
carro1.dueno = 'yael'
console.log(carro1.dueno)
console.log(carro1.toObjetoLiteral())
