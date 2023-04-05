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

const body = document.querySelector('body')
console.log(body)

const header = document.querySelector('header')
const main = document.querySelector('main')
const footer = document.querySelector('footer')

const section = document.createElement('section')
section.classList.add('jumbotron', 'text-center')
const album = document.createElement('div')
album.classList.add('album', 'py-5', 'bg-light')
main.append(section, album)

const containerTitle = document.createElement('div')
containerTitle.classList.add('container')
section.append(containerTitle)

const h1 = document.createElement('h1')
h1.classList.add('jumbotron-heading')
h1.innerText = 'Album example'
const pTitle = document.createElement('p')
pTitle.classList.add('lead', 'text-muted')
pTitle.innerText = 'Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks dont simply skip over it entirely.'
const pLinks = document.createElement('div')
containerTitle.append(h1, pTitle, pLinks)

const aTitleOne = document.createElement('a')
aTitleOne.classList.add('btn', 'btn-primary', 'mx-2')
aTitleOne.href = '#'
aTitleOne.innerText = 'Main call to action'
const aTitleSecond = document.createElement('a')
aTitleSecond.classList.add('btn', 'btn-secondary', 'my-2')
aTitleSecond.href = '#'
aTitleSecond.innerText = 'Secondary action'
pLinks.append(aTitleOne, aTitleSecond)


const containerAlbum = document.createElement('div')
containerAlbum.classList.add('container')
album.append(containerAlbum)

const containerRow = document.createElement('div')
containerRow.classList.add('row')
containerAlbum.append(containerRow)


heros.forEach((hero) => {

    const cardCol = document.createElement('div')
    cardCol.classList.add('col-md-4')
    containerRow.append(cardCol)
    
    const cardContent = document.createElement('div')
    cardContent.classList.add('card', 'mb-4', 'box-shadow')
    cardContent.style = 'height: 550px';
    cardCol.append(cardContent)

    const imgCard = document.createElement('img')
    imgCard.classList.add('card-img-top')
    imgCard.style = 'height: 250px';

    imgCard.src = hero.image
    const cardBody = document.createElement('div')
    
    cardBody.classList.add('card-body','position-relative')
    cardContent.append(imgCard, cardBody)
    
    const h5 = document.createElement('h5')
    h5.classList.add('card-title')
    h5.innerText = hero.name
    cardBody.append(h5)

    const pText = document.createElement('p')
    pText.classList.add('card-text')
    pText.innerText = hero.about
    // const divCont = document.createElement('div')
    // divCont.classList.add('position-absolute','bottom-0', 'mb-3')
    cardBody.append(pText)

    const divContBtn = document.createElement('div')
    divContBtn.classList.add('btn-group','position-absolute','bottom-0','start-0', 'm-3')
    const small = document.createElement('small')
    small.classList.add('text-muted','position-absolute','bottom-0','end-0', 'm-3')
    small.innerText = '9 mins'
    cardBody.append(divContBtn, small)

    const btnOne = document.createElement('button')
    btnOne.classList.add('btn', 'btn-sm', 'btn-outline-secondary')
    btnOne.type = 'button'
    btnOne.innerText = 'View'
    const btnSecond = document.createElement('button')
    btnSecond.classList.add('btn', 'btn-sm', 'btn-outline-secondary')
    btnSecond.type = 'button'
    btnSecond.innerText = 'Edit'
    divContBtn.append(btnOne, btnSecond)
})