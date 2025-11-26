//Early binding - Compile time binding

//When a method or property is decided/ linked before the code runs

const calculator = {
    add: function(a,b){
        return a+b;
    }
}

//Method call is known at compile-time = Early Binding

console.log(calculator.add(5,3))

//Late Binding - Run time Binding

function greet(person){
    return person.speak() //Method decided at runtime
}

const student = {
    speak: function(){return "Hi! I am a student"}
}

const teacher = {
    speak: function(){return "Hi! I am a teacher"}
}

//Same call - different output (decided at runtime)

console.log(greet(student))
console.log(greet(teacher))