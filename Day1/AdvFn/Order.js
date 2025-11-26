//Function needs to proccess unknown number of purchased items

function createOrder(customerName, ...items){
    console.log(`Customer: ${customerName}`)
    console.log(`Item Purchased:`)

    for(let index in items){
        console.log("-"+items[index])
    }
}

createOrder("Priya","Laptop","Mouse","Keyboard")