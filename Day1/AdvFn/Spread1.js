//REst Operator - Collect multiple arguments into a single array in a function

function sumAll(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumAll(10, 20, 30, 40)); // 100

//Spread operator - Expand an array or object into individual elements

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Spread array elements into a new array
const merged = [...arr1, ...arr2];

console.log(merged); // [1, 2, 3, 4, 5, 6]

//Combing both rest and spread operator
function greet(greeting, ...names){
    names.forEach(name => console.log(`${greeting}, ${name}`))
}

const friends = ["Alice","Bob"]
greet("Hello ",...friends)