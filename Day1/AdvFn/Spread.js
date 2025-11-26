//Rest Operator

// function sumAll(a,b,c,d){
//     return a+b+c+d
// }

// console.log(sumAll(10,20,30))

function sumRest(...numbers){
    let total = 0

    for(let i=0;i<numbers.length;i++){
        total += numbers[i]
    }
    return total
}

console.log(sumRest(10,20,30,40,50))

//Seperate first item and remaining items
const [first, ...rest] = ["Apple","Banana","Orange","Mango"]
console.log(first)
console.log(rest)