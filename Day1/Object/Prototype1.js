//Scenario - Company empployee system

/*
A company has different types of employees and managers

All employees have name, salary, and a method to display the details
Managers extend Employee and have an extra property: teamSize and a method: manageTeam()

constructor, functions, prototype and inheritance
*/

//Base Constructor: Employee

function Employee(name, salary){
    this.name = name
    this.salary = salary
}

//Add method to Employee prototype
Employee.prototype.getDetails = function(){
    console.log(`${this.name} earns ${this.salary} per month`)
}

//Derived Constructor: Manager
function Manager(name,salary, teamSize){
    Employee.call(this,name,salary)
    this.teamSize = teamSize
}

//Inherit Employee prototype methods
Manager.prototype = Object.create(Employee.prototype)
Manager.prototype.constructor = Manager

//Manager specific method
Manager.prototype.manageTeam = function(){
    console.log(`${this.name} manages a team of ${this.teamSize} people.`)
}

//Create object
const emp1 = new Employee("John",45000)
const manager1 = new Manager("Priya", 85000, 12)

//Call methods
emp1.getDetails()

manager1.getDetails()
manager1.manageTeam()