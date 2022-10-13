/**
* --------------------Iteración #2: Modificando el DOM------------------
*/
console.log("-----Iteración #2: Modificando el DOM-----");

//Tomamos el Body
let body = document.querySelector('body');


//2.1 
let newDiv = document.createElement('div')
console.log(newDiv)

let insertDiv = body.appendChild(newDiv)
console.log(insertDiv)


//2.2
let newDiv2 = document.createElement('div')
console.log(newDiv2)

let insertDiv2 = body.appendChild(newDiv2)
console.log(insertDiv2)

let newP = document.createElement('p')
console.log(newP)

let insertP = insertDiv2.appendChild(newP)
console.log(insertP)


//2.3
let newDiv3 = document.createElement('div')

let insertDiv3 = body.appendChild(newDiv3)

for (let index = 0; index < 6; index++) {
    
    let newP2 = document.createElement('p')
    insertDiv3.appendChild(newP2)

}

console.log(insertDiv3);


//2.4
let newP3 = document.createElement('p')

let textP = document.createTextNode('Soy dinámico!')

newP3.appendChild(textP)
body.appendChild(newP3)


//2.5
let elementH2 = document.querySelector('h2.fn-insert-here')
console.log(elementH2);

elementH2.innerHTML = 'Wubba Lubba dub dub'


//2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let newUl = document.createElement('ul');


for (const app of apps) {

    let newLi = document.createElement('li');

    let textLi = document.createTextNode(app);
    console.log(textLi);

    newLi.appendChild(textLi);

    newUl.appendChild(newLi);
}

body.appendChild(newUl);


//2.7
let deleteElementClass = document.querySelectorAll('.fn-remove-me');

deleteElementClass.forEach(element => {
    console.log(element);
    element.remove();
});


//2.8
let elementDiv = document.querySelector('div');

elementDiv.insertAdjacentHTML('afterend', '<p>Voy en medio!</p>');


//2.9
let elementDivWithClass = document.querySelectorAll('div.fn-insert-here');
console.log(elementDivWithClass);

elementDivWithClass.forEach(div =>  {

    let newP4 = document.createElement('p');
    let textP2 = document.createTextNode('Voy dentro!');
    newP4.appendChild(textP2);
    console.log(div);
    div.appendChild(newP4);
});



