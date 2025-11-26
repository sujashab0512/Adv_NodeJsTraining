//map() - Transform Each element
const numbers = [1,2,3,4,5]
const double = numbers.map(num => num*2)

console.log(double)

//map() - creates a new array by application a function to each element
//original array remains unchanged

//reduce() - Combine Array to Single Value
const number = [10,20,30]
const sum = number.reduce((total,num)=> total + num , 0)
console.log(sum)

//reduce() - combines all elements into one value

//filter() - Select certain elements
//Age > 18

const age = [10,30,5,22]
const filtered = age.filter(num => num>18)

console.log(filtered)

//sort() = Sort in ascending order
const numvalue = [23,4,56,17,43]
numvalue.sort((a,b)=>a-b)   //23-4 = 19 , 4 23

console.log(numvalue)

//flat() - Flatten Nested Array into one array
const nested = [[1,2],[3,4],[4,5]]
const flatArray = nested.flat()
console.log(flatArray)