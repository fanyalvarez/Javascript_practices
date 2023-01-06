export default class Hero {

    id;
    gender;
    hero;
    nombre;
    poder;
    villano;

    constructor(id, gender, hero, nombre, poder, villano,) {
        this.id = id
        this.gender = gender
        this.hero = hero
        this.nombre = nombre
        this.poder = poder
        this.villano = villano
    }

toJson(){
    // const hero =
    return {
        id     :this.id      , 
        gender :this.gender  , 
        hero   :this.hero    , 
        nombre :this.nombre  , 
        poder  :this.poder   , 
        villano:this.villano ,    
    }
    // return JSON.stringify(hero)
}

genderIs(){
    if (this.gender === 'female') {
        console.log(`${this.hero} is female`)
    } else{
        console.log(`${this.hero} is male`)
    }
}

power(){
    if (this.poder.includes('animal')) {
        console.log(`${this.hero} have a animal's power`)
    } 
}
}