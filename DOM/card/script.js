//referencia la body
const body = document.querySelector('body')
console.log(body)

//cracion de div llamado card --- add clase
const card = document.createElement('div')
card.classList.add('card')

//add div=card al body  
body.append(card)

//create imgCard como img  ---  create an img   
const imgCard = document.createElement('img') 
imgCard.classList.add('card-img-top')

//add img link to imgCard
imgCard.src = 'http://m.gettywallpapers.com/wp-content/uploads/2021/08/4k-Spider-Man-No-Way-Home-Film-Wallpaper.jpg'

//add imgCard to card
card.append(imgCard)

// crear un div llamado card body con la clase card-body and add
const cardBody = document.createElement('div')
cardBody.classList.add ('card-body')
card.append(cardBody)

const cardTitle = document.createElement('h5')
cardTitle.classList.add ('card-title')
cardTitle.innerText = 'Spider-man No Way'
cardBody.append(cardTitle)

const cardText = document.createElement('p')
cardText.classList.add('card-text')
cardText.innerText = 'Spider-Man seeks the help of Doctor Strange to forget his exposed secret identity as Peter Parker. However, Stranges spell goes horribly wrong, leading to unwanted guests entering their universe.'
cardBody.append(cardText)

const btn = document.createElement('a')
btn.classList.add('btn')
btn.classList.add('btn-danger')
btn.innerText='See the movie'
cardBody.append(btn)