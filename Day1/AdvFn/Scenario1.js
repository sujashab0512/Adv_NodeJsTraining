//Filter and Sort Student

const students = [
    {name:"Rahul", mark: 65},
    {name: "Priya", mark: 80},
    {name: "Amit", mark: 75}
]

const topStudents = students
.filter(student => student.mark>70)
.sort((a,b) => b.mark-a.mark)
.map(student => `${student.name}: ${student.mark}`)

console.log(topStudents)

// topStudents.forEach(student =>{
//     console.log(`${student.name}: ${student.mark}`)
// })