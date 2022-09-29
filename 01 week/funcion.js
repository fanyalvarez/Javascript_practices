function saludar(nombre , edad) {
    console.log(arguments)
    console.log(`nombre ${nombre}`)
    console.log(`edad ${edad}`)
}
saludar('yael', 22,3)
// saludar('fanny', 30)

//-----------------------------------------
const calificaciones = [5,6,7,8,9,10,4.5,7.6]
 
//----1
calificaciones.forEach(function(calificacion){
    console.log(calificacion)
})

//----2
calificaciones.forEach((calificacion)=>console.log(calificacion))

//--------------------------------
//----1
const potencia1 = function(base, exponente) {
    let resultado = 1;
    for (let cuenta = 0; cuenta < exponente; cuenta++) {
      resultado *= base;
    }
    return resultado;
  };
  
  console.log(potencia1(2, 2));
  
//----2
const potencia2 = (base, exponente) => {
    let resultado = 1;
    for (let cuenta = 0; cuenta < exponente; cuenta++) {
      resultado *= base;
    }
    return resultado;
  };

  console.log(potencia2(2, 2))

  //----------------------------------