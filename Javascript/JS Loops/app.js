/**
 * --------------------Iteración #1: Usa includes------------------
 */
console.log("-----Iteración #1: Usa includes-----");

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

for (let i = 0; i < products.length; i++) {
    const element = products[i];

    if (element.includes("Camiseta")) {
        console.log(element);
    }
    
}

console.log("-----FIN I#1------\n");


/**
* --------------------Iteración #2: Condicionales avanzados------------------
*/
console.log("-----Iteración #2: Condicionales avanzados-----");

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

//Con for in
console.log("---Con for in---");
for (const key in alumns) {
    
    const alumno = alumns[key];

    if ((alumno.T1 && alumno.T2) == true || (alumno.T1 && alumno.T3) == true || (alumno.T2 && alumno.T3)) {
        alumno.isApproved = true;
        console.log(alumno);
    } else {
        alumno.isApproved = false;
        console.log(alumno);
    }
}

//Con foreach
console.log("---Con foreach");
alumns.forEach(alumno => {
    if ((alumno.T1 && alumno.T2) == true || (alumno.T1 && alumno.T3) == true || (alumno.T2 && alumno.T3)) {
        alumno.isApproved = true;
        console.log(alumno);
    } else {
        alumno.isApproved = false;
        console.log(alumno);
    }
});

console.log("-----FIN I#2------\n");



/**
 * --------------------Iteración #3: Probando For...of------------------
 */
console.log("-----Iteración #3: Probando For...of-----");

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

for (const place of placesToTravel) {
    console.log(place);
}

console.log("-----FIN I#3------\n");


/**
 * --------------------Iteración #4: Probando For...in------------------
 */
 console.log("-----Iteración #4: Probando For...in-----");

 const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const key in alien) {

    console.log(`${key}: ${alien[key]}`);

}

 console.log("-----FIN I#4------\n");



 /**
 * --------------------Iteración #5: Probando For------------------
 */
console.log("-----Iteración #5: Probando For-----");

const placesToTravel2 = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}];

const placesWithoutDeleted = [];

let index11 = placesToTravel2.findIndex(element => element.id === 11);
let index40 = placesToTravel2.findIndex(element => element.id === 40);

for (let index = 0; index < placesToTravel2.length; index++) {

    if (placesToTravel2[index]!== placesToTravel2[index11] && placesToTravel2[index]!== placesToTravel2[index40]) {
        placesWithoutDeleted.push(placesToTravel2[index]);
    }

} 

console.log(placesWithoutDeleted);


//2ª opción
const placesWithoutDeleted2 = [];

for (let index = 0; index < placesToTravel2.length; index++) {
    const place = placesToTravel2[index];

    if (place.id !== 11 && place.id !== 40) {
        placesWithoutDeleted2.push(place);
    } 
}

console.log(placesWithoutDeleted2);

console.log("-----FIN I#5------\n");



console.log("-----Iteración #6: Mixed For...of e includes-----");

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

const toysWithoutWordCat = [];

for (const toy of toys) {

    if (!toy.name.includes("gato")) {
        toysWithoutWordCat.push(toy);
    }
    
}

console.log(toysWithoutWordCat);

console.log("-----FIN I#6------\n");



console.log("-----Iteración #7: For...of avanzado-----");

const popularToys = [];
const toys2 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
];

for (const toy of toys2) {
    console.log(toy.sellCount > 15);

    if (toy.sellCount > 15) {
        popularToys.push(toy);
    }
}

console.log(popularToys);

console.log("-----FIN I#7------\n");