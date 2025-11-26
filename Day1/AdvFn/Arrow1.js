const add = (a,b) => a+b

console.log(add(10,4))

const greet = name => `Hello ${name}`

console.log(greet("Anoop"))

//Scenario - Shopping Cart Total

//Calculate total price of items in a shopping cart

const calculateTotal = (cart) =>{
    let total = 0
    for(let price of cart){
        total += price
    }
    return total
}

let cartItems = [1200,300,450]
console.log("Total Cart value: "+ calculateTotal(cartItems))

//Another Method - Using Arrow function + reduce
const calculateTotalArrow = (cart) => cart.reduce((total,price) => total+price , 0)

let Items = [1200,300,450]
console.log("Total Cart value: "+ calculateTotalArrow(cartItems))