const heros = [
    {
        id: 0,
        gender: 'male',
        hero: 'Spider-Man',
        name: 'Peter Parker',
        power: 'sentido animal aracnido',
        villain: 'Duende Verde',
    },
    {
        id: 1,
        gender: 'male',
        hero: 'Profesor X',
        name: 'Charles Xavier',
        power: 'telepátia natural',
        villain: 'Magneto',
    }, {
        id: 2,
        gender: 'male',
        hero: 'Capitán América',
        name: 'Steve Rogers',
        power: 'super fuerza',
        villain: 'Red Skull',
    },
    {
        id: 3,
        gender: 'male',
        hero: 'Wolverine',
        name: 'James Logan',
        power: 'mutante instinto animal',
        villain: 'Magneto',
    },
    {
        id: 4,
        gender: 'female',
        hero: 'Black Widow',
        name: 'Natasha Romanoff',
        power: 'espía soviética natural',
        villain: 'Taskmaster',
    },
]

const main = document.querySelector('main')
main.classList.add('container-sm','w-50','p-5')
console.log(main)

//create ol add class and add to main
const ol = document.createElement('ol')
ol.classList.add('list-group', 'list-group-numbered')
main.append(ol)

// //create li add class and add to ol
// const li = document.createElement('li')
// li.classList.add('list-group-item','d-flex','justify-content-between','align-items-start')
// ol.append(li)

// //create div content add class and add to li
// const content = document.createElement('div')
// content.classList.add('ms-2','me-auto')
// li.append(content)

//create div subheading add class and add to div content
// const subheading = document.createElement('div')
// subheading.classList.add('fw-bold')
// content.append(subheading)

// //create span add class and add to li
// const span = document.createElement('span')
// span.classList.add('fw-badge', 'bg-primary', 'rounded-pill')
// li.append(span)

heros.forEach((hero) => {

    //create li add class and add to ol
    const li = document.createElement('li')
    li.classList.add('list-group-item', 'list-group-item-info', 'd-flex', 'justify-content-between', 'align-items-start')
    ol.append(li)

    //create div content add class and add to li
    const content = document.createElement('div')
    content.classList.add('ms-2', 'me-auto')
    li.append(content)

    //create div subheading add class and add to div content
    const subheading = document.createElement('div')
    subheading.classList.add('fw-bold')
    subheading.innerText = hero.name
    content.append(subheading)
    content.append(hero.power)


    //create span add class and add to li
    const span = document.createElement('span')
    span.classList.add('badge', 'bg-success', 'rounded-pill','px-2')
    span.innerText = hero.name
    li.append(span)
    // li.append(hero.name)

});