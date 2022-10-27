const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
  ];

  let counter = 0;
  for (const product of products) {
    counter += product.sellCount;
  }

  const productsAverage = counter/products.length

  console.log("La media de las ventas de los productos:", productsAverage);


/**
 * Con ES6 (reduce)
*/

let counter2 = products.reduce((acc, product) => acc + product.sellCount, 0)

const productsAverageES6 = counter2/products.length

console.log("La media de las ventas de los productos con ES6:", productsAverageES6);