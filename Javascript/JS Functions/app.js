/**
 * --------------------Iteración #1: Buscar el máximo------------------
 */
 function sum(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        console.log("El más alto es: " + numberOne);
    } else {
        console.log("El más alto es: " + numberTwo);
    }
  }

sum(10, 8);



/**
 * --------------------Iteración #2: Buscar la palabra más larga------------------
 */
console.log("-----Iteración #2: Buscar la palabra más larga-----");
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(avengers) {

  let word = 0;

  for (let i = 0; i < avengers.length; i++) {
    const item = avengers[i];
    console.log("Avenger: "+ item + " - " + item.length + " letras");

    word = Math.max(item.length);
  }

  console.log(word);

  const firstLongestWord = avengers.find(element => element.length == word);

  console.log("La primera palabra más larga es: " + firstLongestWord);
  
  
}

findLongestWord(avengers);

 /**
 * --------------------Iteración #3: Calcular la suma------------------
 */
  console.log("-----Iteración #3: Calcular la suma-----");
  const numbers = [1, 2, 3, 5, 45, 37, 58];

  function sumAll(numbers) {
    let total = 0;  
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];     
    }
    console.log("El total de la suma es: " + total);
  }

  sumAll(numbers);



/**
* --------------------Iteración #4: Calcular el promedio------------------
*/
console.log("-----Iteración #4: Calcular el promedio-----");
const numbers2 = [12, 21, 38, 5, 45, 37, 6];

function average(numbers2) {
  let total = 0;

  for (let i = 0; i < numbers2.length; i++) {
    total += numbers2[i];  
  }

  let promedio = total / numbers.length;

  console.log("El promedio es: " + promedio);
}


average(numbers2);



/**
 * --------------------Iteración #5: Calcular promedio de strings------------------
 */
console.log("-----Iteración #5: Calcular promedio de strings-----");
 const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
 function averageWord(mixedElements) {
   
    let number = 0;
    let string = 0;
    
    for (let i = 0; i < mixedElements.length; i++) {
        const element = mixedElements[i];     
        if (element === Number(element)) {
            console.log("Number: " + element);
            number += element;
        } else {
            console.log("String: " + element);
            string += element.length;
        }
    }

    console.log("Suma Numbers: " + number);
    console.log("Suma Strings: " + string);

 }

 averageWord(mixedElements);



/**
* --------------------Iteración #6: Valores únicos------------------
*/
console.log("-----Iteración #6: Valores únicos-----");

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(duplicates) {

  let valores = duplicates.filter((element, index) => {
    console.log("Elemento: " + element + " - Index: " + index);

    console.log(duplicates.indexOf(element));

    if (duplicates.indexOf(element) === index) {
      return element;
    }
  });

  console.log(valores);
  
}

removeDuplicates(duplicates);



/**
 * --------------------Iteración #7: Buscador de nombres------------------
 */
 console.log("-----Iteración #7: Buscador de nombres-----");

 const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(nameFinder, name) {

  let found = nameFinder.includes(name);

  if (found) {
    console.log("El elemento " + name + " es " + found + " con la posición " + nameFinder.indexOf(name));
  } else {
    console.log(found + "- No existe " + name);
  }

}

finderName(nameFinder, "Logan");
finderName(nameFinder, "Eduardo");
finderName(nameFinder, "Jessi");



/**
 * --------------------Iteration #8: Contador de repeticiones------------------
*/
console.log("-----Iteration #8: Contador de repeticiones-----");
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(counterWords) {
  
  let count = [];

  counterWords.forEach((element) => {
    
    count[element] = (count[element] || 0 ) + 1;

  });

  console.log(count);

}

repeatCounter(counterWords);
