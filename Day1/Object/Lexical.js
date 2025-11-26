//Lexical - A function can access variables from the place where it was written

function outer(){
    let x = 10

    function inner(){
        let y = 20
        console.log('inner function: ',x)
        console.log('inner function: ',y)
    }
    //inner() //lexical scope - explictly calling the inner() function
    console.log('Outer function: ',x)
    //console.log('outer function: ',y)
}

outer()

//Closure
function greet(message){
    return function(name){
        console.log(message + ", "+name)
    }
}

const sayHello = greet("Hello")
sayHello("John")

/*
greet() finishes execution
But the inner function still remembers message
This memory is called a closure
*/