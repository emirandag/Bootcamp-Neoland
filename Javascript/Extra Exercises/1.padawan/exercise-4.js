const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
  ]

let counter = 0;

for (const product of products) {
    counter += product.sellCount;
}


console.log("El total de las ventas de los productos es: ", counter);


/**
 * Con método ES6 (reduce)
 */

let counter2 = products.reduce((acc, product) => acc + product.sellCount, 0)

console.log("El total de las ventas de los productos con el método reduce es: ", counter2);