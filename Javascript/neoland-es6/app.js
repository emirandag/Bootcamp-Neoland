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



/**
* --------------------Iteración #2: Destructuring------------------
*/
console.log("-----Iteración #2: Destructuring-----")

//2.1
const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const {title, gender, year} = game
console.log(`Título del juego: ${title}`)    
console.log(`Genéros: ${gender}`)    
console.log(`Año del juego: ${year}`)

//2.2
const fruits = ['Banana', 'Strawberry', 'Orange']

const [fruit1, fruit2, fruit3] = fruits
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)

//2.3
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
}

const {name, race} = animalFunction()
console.log(name)
console.log(race)


//2.4
const car = {nameCar: 'Mazda 6', itv: [2015, 2011, 2020] }

const {nameCar, itv} = car
console.log(nameCar)
console.log(itv)

const [year1, year2, year3] = itv
console.log(year1)
console.log(year2)
console.log(year3)






console.log("-----FIN I#2------\n")