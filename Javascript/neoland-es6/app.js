/**
* --------------------Iteración #1: Arrows------------------
*/
console.log("-----Iteración #1: Arrows-----");

const sumNumbers = (a = 10, b = 5) => {

    let sum = a + b;

    return `La suma de los número es ${sum}`

}

//1.1
const result = sumNumbers()
console.log(result)

//1.2
const result2 = sumNumbers(8)
console.log(result2)

//1.3
const result3 = sumNumbers(20, 15)
console.log(result3)

console.log("-----FIN I#1------\n");