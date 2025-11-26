//Discount calculator for multiple products

//We want a function that calculates the final price for a list of products based on
//a base discount, and the closure will remember the discount for later use

//Outer function with multiple arguments
function discountCalculator(baseDiscount, taxRate){

    //Inner function(closure) that calculates final price for a given product
    return function(productName, productPrice){
        const discountedPrice = productPrice - (productPrice * baseDiscount / 100)
        const finalPrice = discountedPrice + (discountedPrice * taxRate / 100)
        console.log(`${productName}: Final price after ${baseDiscount}% discount
            and ${taxRate}% tax = ${finalPrice.toFixed(2)}`)
    }
}

//Create a closure with 10% discount and 5% tax
const applyDiscount = discountCalculator(10,5)

//Use the closure for multiple products
applyDiscount("Laptop", 1200)
applyDiscount("Headphones", 200)
applyDiscount("Keyboard", 100)