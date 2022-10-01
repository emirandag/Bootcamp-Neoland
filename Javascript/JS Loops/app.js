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