/**
* --------------------Iteración #1: Interacción con el DOM------------------
*/
console.log("-----Iteración #1: Interacción con el DOM-----");

//1.1
let buttonClassShowme = document.querySelector('.showme')
console.log(buttonClassShowme);

//1.2
let h1IdPillado = document.querySelector('#pillado')
console.log(h1IdPillado);

//1.3
let showAllP = document.querySelectorAll('p')
console.log(showAllP);

//1.4
let allClassPokemon = document.querySelectorAll('.pokemon')
console.log(allClassPokemon);

//1.5
let allElementsAttribute = document.querySelectorAll('[data-function="testMe"]')
console.log(allElementsAttribute);

//1.6
const showThirdCharacter = allElementsAttribute[2].innerHTML;
console.log(showThirdCharacter);

 