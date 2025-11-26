//simple billing system -  Check and format on numeric values such as item
//price, quantity and total amount

//Check if a value is an integer
let quantity = 5
let weight = 2.5

console.log(Number.isInteger(quantity))
console.log(Number.isInteger(weight))

//toFixed() - formats a number to a fixed number of decimal places
let price = 99.9775

console.log(price.toFixed(2))
console.log(price.toFixed())

//toString() - convert a number to a string
let total = 300
console.log(typeof total)
console.log(total.toString())
console.log(typeof total.toString())

//Number.parseInt() - converts a string into an integer
let input1 = "hi123"
let input = "123px"
console.log(Number.parseInt(input1))
console.log(Number.parseInt(input))

//Number.parseFloat() - convert a string into floating value
let input2 = "99.99USD123"
console.log(Number.parseFloat(input2))

//Number.isNan() - Checked if a value is NaN(Not a Number)

const discount = "abc"
//discount = "hello"
console.log(Number.isNaN(discount))
console.log(Number.isNaN(Number(discount)))