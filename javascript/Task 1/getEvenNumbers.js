// There are various methods to approach this task using filter method would be the best solution for clarity and efficiency

function getEvenNumbers(a){         //function definition
    return a.filter(number => number%2===0)   //callback function
}

const inputArray = [5,7,10,55,78,24,1,3]   // Defining array of numbers
const onlyEvenArray = getEvenNumbers(inputArray)  //function call
console.log(`EvenNumbersArray from the given inputArray ${onlyEvenArray}`) //Print the output