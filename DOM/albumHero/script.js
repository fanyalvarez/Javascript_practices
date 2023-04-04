// const APIURL = 'https://pokeapi.co/api/v2/pokemon/ditto'
// console.log(APIURL)
const heros = [
    {
        id: 0,
        gender: 'male',
        hero: 'Spider-Man',
        name: 'Peter Parker',
        power: 'sentido animal aracnido',
        about: 'Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books. ',
        image: 'https://e0.pxfuel.com/wallpapers/3/22/desktop-wallpaper-animated-spiderman-top-background-spider-man-cartoon.jpg',
        villain: 'Duende Verde',
    },
    {
        id: 1,
        gender: 'male',
        hero: 'Profesor X',
        name: 'Charles Xavier',
        power: 'telepátia natural',
        about: 'Professor X is a character appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist/co-writer Jack Kirby, the character first appeared in The X-Men #1. The character is depicted as the founder and occasional leader of the X-Men.',
        image: 'https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg',
        villain: 'Magneto',
    }, {
        id: 2,
        gender: 'male',
        hero: 'Capitán América',
        name: 'Steve Rogers',
        power: 'super fuerza',
        about: 'Captain America is a superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 from Timely Comics, a predecessor of Marvel Comics',
        image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/06/Captain-America-throwing-his-shield.png',
        villain: 'Red Skull',
    },
    {
        id: 3,
        gender: 'male',
        hero: 'Wolverine',
        name: 'James Logan',
        power: 'mutante instinto animal',
        about: 'James "Jimmy" Howlett, also known as Logan or by his codename, The Wolverine, is a fictional character originating as the primary protagonist of 20th Century Fox s X-Men film series, and appearing in the Marvel Cinematic Universe media franchise produced by Marvel Studios.',
        image: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/FNOHDGI3YZG4HAPGTYX4LPMZWY.jpg',
        villain: 'Magneto',
    },
    {
        id: 4,
        gender: 'female',
        hero: 'Black Widow',
        name: 'Natasha Romanoff',
        power: 'espía soviética natural',
        about: 'Natasha Romanoff, a member of the Avengers and a former KGB spy, is forced to confront her dark past when a conspiracy involving her old handler arises.',
        image: 'https://dailysuperheroes.com/wp-content/uploads/2020/01/BlackWidowDS-Cropped.jpg',
        villain: 'Taskmaster',
    },
]

const main = document.querySelector('main')
console.log(main)

const row = document.createElement('div')
row.classList.add('row', 'row-cols-4', 'justify-content-md-center')
main.append(row)

heros.forEach((hero) => {

    const card = document.createElement('div')
    card.classList.add ('card')
    card.style = 'margin:10px'; 
    row.append(card)

    const imgCard = document.createElement('img')
    imgCard.classList.add('col','card-img-top')
    imgCard.style = 'height: 200px';
    imgCard.src = hero.image
    card.append(imgCard)

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    card.append(cardBody)

    const h5 = document.createElement('h5')
    h5.classList.add('card-title')
    h5.innerText = hero.name
    cardBody.append(h5)

    const p = document.createElement('p')
    p.classList.add('card-text')
    p.innerText = hero.about
    cardBody.append(p)

    const footer = document.createElement('div')
    footer.classList.add('card-footer','bg-transparent', 'justify-content-md-start')
    card.append(footer)

    const a = document.createElement('a')
    a.classList.add('btn','btn-primary', 'me-md-2')
    a.href = '#'
    a.type = 'button'
    a.innerText = 'view'
    footer.append(a)

    const a2 = document.createElement('a')
    a2.classList.add('btn','btn-primary')
    a2.href = '#'
    a.type = 'button'
    a2.innerText = 'view'
    footer.append(a2)

})