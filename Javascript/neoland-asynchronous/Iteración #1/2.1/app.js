/**
* --------------------Iteración #1: Fetch------------------
*/

//2.1
console.log("-----Iteración #1: Fetch-----")

const actionButton = document.querySelector('button')

actionButton.addEventListener('click', (event) => {
    const elementInput = document.querySelector('input')
    //console.log(elementInput.value);
    const valueInput = elementInput.value
    //console.log(valueInput);
    getApiNationalize(valueInput)
})

const getApiNationalize = async (value) => {
    const baseUrl = 'https://api.nationalize.io';
    const responseApi = await fetch(`${baseUrl}/?name=${value}`)
    const jsonResponse = await responseApi.json()
    //console.log(jsonResponse);
    showValueDom(jsonResponse)
}


//2.3
const showValueDom = (result) => {
    
    const { country: countries, name } = result
    //console.log(countries);
    const elementBody = document.querySelector('body')
    
    countries.forEach((country) => {
        console.log(country);
        
        const {country_id, probability} = country
        const elementP = document.createElement('p')
        const percentage = (probability*100).toFixed(1)

        elementP.textContent = `El nombre ${name} tiene un ${percentage} porciento de ser de ${country_id}.`
        elementBody.appendChild(elementP)


        
        button(elementP, elementBody)

    });
}


//2.4
const button = (elementP, elementBody) => {

    const newButton = document.createElement('button')
    newButton.textContent = 'X'
    elementBody.appendChild(newButton)
    newButton.addEventListener('click', (event) => {
        if (newButton.previousElementSibling === elementP) {
            newButton.previousElementSibling.remove()
        }
        
    })
}
