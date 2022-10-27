const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

products.forEach((product) => {
    if (product.sellCount > 20) {
        goodProducts.push(product)
    } else {
        badProducts.push(product)
    }
})

console.log("Productos con más de 20 ventas:", goodProducts);
console.log("Productos con menos de 20 ventas:", badProducts);


/**
 * Con ES6 (filter)
 */
const goodProducts2 = [];
const badProducts2 = [];
products.filter((product) => product.sellCount > 20 ? goodProducts2.push(product) : badProducts2.push(product))

console.log("Productos con más de 20 ventas con filter:", goodProducts2);
console.log("Productos con menos de 20 ventas con filter:", badProducts2);