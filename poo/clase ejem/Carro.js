// clase
// carro   de donde se derivan, plantilla cada uno es una instancia
//          encapsula las propiedades y funciones
//            crear una objeto apartir de una clase es instanciar un ibjeto de la clase

// atributos caracteristicas propiedades 
// color;
// modelo;
// marca;
// placas;
// dueno;
// estado;

// metodos  funciones que puede ejecutar
// encender 
// apagar
// acelerar
// grabar

export default class Carro {

    #color;
    #modelo;
    #marca;
    #placas;
    #dueno;
    #estado;

    constructor(color, modelo, marca, placas, dueno, estado) {

        this.#color = color;
        this.#modelo = modelo;
        this.#marca = marca;
        this.#placas = placas;
        this.#dueno = dueno;
        this.#estado = estado;
    }

    encender() {
        console.log(`el carro de ${this.#dueno} esta encendido`)
    }

    iniciarGrabacion() {
        if (this.#marca === 'tesla') {
            console.log('Iniciando grabacion')
        } else {
            console.log('tu carro no tiene esta funcion')
        }
    }

    set dueno(dueno) {
        this.#dueno = dueno
    }

    get dueno() {
        return this.#dueno
    }

    toJson() {
        const carro = {
            color: this.#color,
            modelo: this.#modelo,
            marca: this.#marca,
            placa: this.#placas,
            dueno: this.#dueno,
            estado: this.#estado,
        }
        return JSON.stringify(carro)
    }

    toObjetoLiteral() {
        return {
            color: this.#color,
            modelo: this.#modelo,
            marca: this.#marca,
            placa: this.#placas,
            dueno: this.#dueno,
            estado: this.#estado,
        }
    }
}