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

  let total = 0;  
  function sumAll(array) {
    for (let i = 0; i < array.length; i++) {
        total += array[i];     
    }
    console.log(total);
  }

  sumAll(numbers);