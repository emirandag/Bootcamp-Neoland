/**
* --------------------Iteración #1: Interacción con el DOM-----------------
*/

//1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const body = document.querySelector('body')

const elementUl = document.createElement('ul')


for (const country of countries) {
    console.log(country)
    const elementLi = document.createElement('li')
    
    const textCountry = document.createTextNode(country)

    elementLi.appendChild(textCountry)

    elementUl.appendChild(elementLi)

}

console.log(elementUl)

body.appendChild(elementUl)


//1.2
//let removeClasses = document.querySelector('.fn-remove-me')
const removeClasses = document.querySelectorAll('.fn-remove-me')

for (const removeClass of removeClasses) {
    body.removeChild(removeClass)
}
//body.removeChild(removeClass)


//1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

const elementDiv = document.createElement('div')
elementDiv.setAttribute('data-function', 'printHere')
console.log(elementDiv)

const elementUlCars = document.createElement('ul')

for (const car of cars) {
    const elementLiCar = document.createElement('li')

    const textCar = document.createTextNode(car)

    elementLiCar.appendChild(textCar)
    elementUlCars.appendChild(elementLiCar)
}

console.log(elementUlCars)
elementDiv.appendChild(elementUlCars)

body.appendChild(elementDiv)


//1.4
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]


countries2.forEach(country => {
    //console.log(country)
    
    const elementDivCountry = document.createElement('div')
    const elementH4Country = document.createElement('h4')
    const elementImgCountry = document.createElement('img')

    elementH4Country.innerHTML = country.title
    elementImgCountry.src = country.imgUrl

    elementDivCountry.appendChild(elementH4Country)
    elementDivCountry.appendChild(elementImgCountry)

    body.appendChild(elementDivCountry)
})


//1.5
const buttonDeleteLastElement = document.createElement('button')
buttonDeleteLastElement.innerText = 'Eliminar'
body.appendChild(buttonDeleteLastElement)

console.log(body.lastChild.previousSibling)

buttonDeleteLastElement.addEventListener('click', (event) => {
    body.lastChild.previousSibling.remove()
})


//1.6
const listElements = document.querySelectorAll('li')

console.log(listElements)

listElements.forEach(element => {
    console.log(element);

    const buttonList = document.createElement('button')
    buttonList.innerHTML = "Delete Element"

    element.appendChild(buttonList)

    buttonList.addEventListener('click', (event) => {
        event.preventDefault()
        console.log(event.target.previousSibling.parentNode.remove());
    })
});