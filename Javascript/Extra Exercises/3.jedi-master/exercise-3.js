const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const elementDivAttrDataFunction = document.querySelector('[data-function="printHere"]')

const newUl = document.createElement('ul')

console.log(elementDivAttrDataFunction);

for (const place of places) {
    
    const newLi = document.createElement('li')
    newLi.textContent = place
    newUl.appendChild(newLi)

}

elementDivAttrDataFunction.appendChild(newUl)
