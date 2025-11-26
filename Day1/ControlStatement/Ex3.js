//Object representing students and their marks

const students = {
    Alice: {math: 85, english: 78, science: 92},
    Bob: {math: 95, english: 68, science: 92},
    Charlie: {math: 70, english: 88, science: 80}
}

//Iterate over each student
for(let student in students){
    let totalMarks = 0

    //Iterate over each subject for the current student
    for(let subject in students[student]){
        totalMarks += students[student][subject] //students[Alice][english] = 85 + 78
    }

    console.log(`${student}'s total marks: ${totalMarks}`)
}