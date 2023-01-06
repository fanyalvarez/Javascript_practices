// clase
// carro

// atributos
// color;
// modelo;
// marca;
// placas;
// dueno;
// estado;

// metodos
// encender 
// apagar
// acelerar
// grabar

export default class Carro {

    color;
    modelo;
    marca;
    placas;
    dueno;
    estado;

    constructor(color, modelo, marca, placas, dueno, estado) {

        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.placas = placas;
        this.dueno = dueno;
        this.estado = estado;
    }

    encender() {
        console.log(`el carro de ${this.dueno} esta encendido`)
    }

    iniciarGrabacion() {
        if (this.marca === 'tesla') {
            console.log('Iniciando grabacion')
        } else {
            console.log('tu carro no tiene esta funcion')
        }
    }

    toJson() {
        const carro = {
            color: this.color,
            modelo: this.modelo,
            marca: this.marca,
            placa: this.placas,
            dueno: this.dueno,
            estado: this.estado,
        }
        return JSON.stringify(carro)
    }

    toObjetoLiteral() {
        return {
            color: this.color,
            modelo: this.modelo,
            marca: this.marca,
            placa: this.placas,
            dueno: this.dueno,
            estado: this.estado,
        }
    }
}