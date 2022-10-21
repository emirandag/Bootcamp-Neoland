/**
* --------------------Iteración #1: Fetch------------------
*/
console.log("-----Iteración #1: Fetch-----")

const getApi = async () => {
    const urlApi = 'https://api.agify.io?name=michael'
    const response = await fetch(urlApi)
    const responseJson = await response.json()
    const person = responseJson
    console.log(person)
    jsonInDom(person)

}

const jsonInDom = (person) => {
    const bodyP = document.querySelector('body')

    const ageP = document.createElement('p')
    const countP = document.createElement('p')
    const nameP = document.createElement('p')

    ageP.textContent = `Age: ${person.age}`
    countP.textContent = `Count: ${person.count}`
    nameP.textContent = `Name: ${person.name}`

    bodyP.appendChild(ageP)
    bodyP.appendChild(countP)
    bodyP.appendChild(nameP)
    
}

getApi()
