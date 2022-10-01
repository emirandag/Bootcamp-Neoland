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

console.log("-----FIN I#1------");


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


for (const key in alumns) {
    
    const element = alumns[key];

    if ((element.T1 && element.T2) == true || (element.T1 && element.T3) == true || (element.T2 && element.T3)) {
        element.isApproved = true;
        console.log(element);
    } else {
        element.isApproved = false;
        console.log(element);
    }
}

console.log("-----FIN I#2------");