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
 const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
 function findLongestWord(param) {

 }



 /**
 * --------------------Iteración #3: Calcular la suma------------------
 */
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