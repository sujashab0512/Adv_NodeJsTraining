//Find the average of even numbers in an array

const numbers = [12,7,9,24,5,18,11,30] //sum = 12 + 24 + 18 + 30 / number of elements

let sum = 0 
let count = 0

//Iterate over the array using a for loop
for(let i=0;i<numbers.length;i++){
    if(numbers[i] % 2 == 0){
        sum += numbers[i];
        count++
    }
}

//calculate average of even numbers
let average = sum / count

console.log(`Sum of even number: ${sum}`)
console.log(`Count of even numbers: ${count}`)
console.log(`Average of even number: ${average}`)