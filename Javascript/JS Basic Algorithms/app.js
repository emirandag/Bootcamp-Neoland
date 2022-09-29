/**
 * --------------------Iteración #1: Variables------------------
 */
//1.1
let myFavoriteHero = "Hulk";
console.log(myFavoriteHero);

//1.2
let x = 50;
 
//1.3
let h = 5;
let y = 10;

//1.4
let z = h + y;
console.log(z);



/**
 * --------------------Iteración #2: Variables avanzadas------------------
 */
//1.1
const character = {name: 'Jack Sparrow', age: 10};

character.age = 25;

console.log(character);



//1.2
let firstName = 'Jon'; 
let lastName = 'Snow'; 
let age = 24; 

console.log('Soy ' + firstName + ' ' + lastName + ', tengo ' + age + ' años y me gustan los lobos.');
console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`);



//1.3
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log(toy1.price + toy2.price);

let sumToys = toy1.price + toy2.price;
console.log("La suma de ambos juguetes es : " + sumToys);


//1.4 
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
console.log(globalBasePrice);

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log(car1);
console.log(car2);



/**
 * --------------------Iteración #3: Operadores------------------
 */
//1.1
console.log(10*5);
let product = 10 * 5;
console.log("La multiplicación de 10 por 5 es: " + product);

//1.2
console.log(10/2);
let division = 10 / 2;
console.log("La división de 10 por 2 es: " + division);


//1.3
console.log(15%9);
let rest = 15 % 9;
console.log("El resto de dividir 15 por 9 es: " + rest);

//1.4
let p = 10;
let j = 5;
let o = p + j;
console.log(o);

//1.5
let c = 10;
let m = 5;
let i = 10 * 5;
console.log(i);
