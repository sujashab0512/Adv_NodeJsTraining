class Student {
    static count = 0; // static property

    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
        Student.count++; // increment count whenever a new student is created
    }

    static totalStudents() { // static method
        console.log(`Total students: ${Student.count}`);
    }

    details() {
        console.log(`${this.name} is in grade ${this.grade}`);
    }
}

// Create objects
const s1 = new Student("Alice", 10);
const s2 = new Student("Bob", 11);

s1.details();
s2.details();
Student.totalStudents();

//Scenario: Track number of instances created for a Student class.