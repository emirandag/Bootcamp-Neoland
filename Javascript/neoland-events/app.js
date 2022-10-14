/**
* --------------------Iteración #2: Modificando el DOM------------------
*/
let body = document.querySelector('body');

//1.1
let button = document.createElement('button');
button.setAttribute('id', 'btnToClick');
body.appendChild(button);
button.innerHTML = 'Click';

let getButton = document.querySelector('#btnToClick');
console.log(getButton);

getButton.addEventListener('click', (event) => {
    console.log(event);
});


//1.2
let getInput = document.querySelectorAll('input');

getInput.forEach(input => {
    input.addEventListener('focus', (event) => {
        console.log(event.target.value);
    })
});


//1.3
//let getInput = document.querySelectorAll('input');

getInput.forEach(input => {
    input.addEventListener('input', (event) => {
        console.log(event.target.value);
    })
});
