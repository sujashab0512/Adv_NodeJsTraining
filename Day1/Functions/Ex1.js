//Calculate factorial using function
//factorial = 5 = 5*4*3*2*1

function factorial(n){
    let result =1
    for(let i =2 ;i<=n ; i++){
        result *= i
    }
    return result
}

console.log(factorial(5))