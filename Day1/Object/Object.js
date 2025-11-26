//Object is a standalone entity - stores - properties(data) and methods(functions)

const car = {
    brand: "Toyota",
    Model: "Corolla",
    start: function(){
        console.log(`${this.brand} ${this.model} is starting.`)
    }
}

car.start()

//Prototype
//is an object that other object can inherit from

//constructor function
function Car1(brand,model){
    this.brand = brand
    this.model = model
}

//Adding method to prototype
Car1.prototype.start = function(){
    console.log(`${this.brand} ${this.model} is starting`)
}

carobj = new Car1("Honda", "Civic")
carobj1 = new Car1("Fort","Mustang")

carobj.start()
carobj1.start()