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