//Scenario - You are building a user registration form. You need to manipulate
//and validate strings like username, emails, messages
/*
let username = "Bhuvana"

//Get the length of a string
console.log(username.length)

//toUpperCase() , toLowerCase()

console.log(username.toUpperCase())
console.log(username.toLowerCase())
*/
//includes() - Checks if a substring exist
const email = "bhuvana@example.com"

console.log(email.includes("@"))     //true
console.log(email.includes("gmail"))  //false

//startsWith() and endsWith()
let filename = "file1.pdf"
console.log(filename.startsWith("uf"))
console.log(filename.endsWith("df"))

//slice() - Extract part of a string
console.log(email.indexOf("@"))
const domain = email.slice(email.indexOf("@")+1)
console.log(domain)

//Replace() - Replace a part of a string
const message = "Hello Bhuvana"
console.log(message.replace("Bhuvana", "User"))

//trime() - Remove leading and trailing whitespaces
const input = "    Bhuvana     "
console.log(input.trim())

//split() - Split a string into an array
let fruits = "apple, banana, orange"
let fruitArray = fruits.split(",")
console.log(fruitArray)

//charAt() - Get character at a specific index
console.log(message.charAt(4))