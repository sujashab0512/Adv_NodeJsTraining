//Daily Sales Analysis
/*
Requirement
A retail store wants to analyze its daily sales data for a week. The data is
stored as an array of objects, where each object represents a sale 

Filter products with quantity ≥ 2.
Calculate total price per product.
Sort the products by total price in descending order.
Calculate total revenue from all products.
Print product name and total price for each product.
*/

const sales = [
    {product: "Laptop", quantity: 1, price: 55000},
    { product: "Mouse", quantity: 3, price: 500 },
    { product: "Keyboard", quantity: 2, price: 1500 },
    { product: "Monitor", quantity: 1, price: 8000 },
    { product: "USB Cable", quantity: 5, price: 200 }
]

//1. Filter products with quantity ≥ 2.
const filteredSales = sales.filter(item => item.quantity>=2)

//2. Calculate total price per product - Transformation - map
const salesWithTotal = filteredSales.map(item =>({
    product: item.product,
    totalPrice: item.quantity * item.price
}))

//3. Sort the products by total price in descending order.
const sortedSales = salesWithTotal.sort((a,b)=>b.totalPrice - a.totalPrice)

//4. Calculate total revenue from all products.
const totalRevenue = sortedSales.reduce((sum,item)=>sum+item.totalPrice,0)

//5.Print product name and total price for each product.
sortedSales.forEach(item =>{
    console.log(`Product: ${item.product} , Total Price: ${item.totalPrice}`)
})

console.log(`\n Total Revenue: ${totalRevenue}`)