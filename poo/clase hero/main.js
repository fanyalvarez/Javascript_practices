import Hero from "./Hero.js";

const hero0 = new Hero('0','male','Spider-Man','Peter Parker','sentido animal aracnido','Duende Verde')
const hero1 = new Hero('1','male','Profesor X','Charles Xavier','telepátia natural','Magneto')
const hero2 = new Hero('2','male','Capitán América','Steve Rogers','super fuerza','Red Skull')
const hero3 = new Hero('3','male','Wolverine','James Logan','mutante instinto animal','Magneto')
const hero4 = new Hero('4','female','Black Widow','Natasha Romanoff','espía soviética natural','Taskmaster')

console.log(hero0.toJson())
console.log(hero1.toJson())
console.log(hero2.toJson())
console.log(hero3.toJson())
console.log(hero4.toJson())

hero0.genderIs()
hero1.genderIs()
hero2.genderIs()
hero3.genderIs()
hero4.genderIs()

hero0.power()
hero1.power()
hero2.power()
hero3.power()
hero4.power()
