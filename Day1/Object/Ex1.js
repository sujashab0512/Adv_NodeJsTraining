//Create an object and print properties

let user = {
    name: "Rahul",
    age: 25
}

console.log(user.name)
console.log(user.age)

//Add new property to an object
user.location = "Chennai"

console.log(user)

//Create an object method
let vehicle = {
    brand: "Toyota",
    showBrand : function() {
        return this.brand
    }
}

console.log(vehicle.showBrand())

//Delete a property
delete user.location
console.log(user)

//Access nested object
let student = {
    name: "Arya",
    address: {
        city: "Chennai",
        princode: 600001
    }
}

console.log(student.address.city)