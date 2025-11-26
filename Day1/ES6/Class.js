class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getDetails() {
        console.log(`${this.name} earns ₹${this.salary} per month.`);
    }
}

class Manager extends Employee {
    constructor(name, salary, teamSize) {
        super(name, salary); // inherit properties from Employee
        this.teamSize = teamSize;
    }

    manageTeam() {
        console.log(`${this.name} manages a team of ${this.teamSize} people.`);
    }
}

// Objects
const emp1 = new Employee("John", 45000);
const manager1 = new Manager("Priya", 85000, 12);

emp1.getDetails();
manager1.getDetails();
manager1.manageTeam();
