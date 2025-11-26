//Scenario A website checks whether a user is logged in and whether 
//the user has accepted the terms before continuing

let isLoggedIn = true // user is logged in
let hasAcceptedTerms = false //user has not accepted terms yet

console.log(isLoggedIn)
console.log(hasAcceptedTerms)

//Simple check
if(isLoggedIn){ //true
    console.log("Welcome to the website")
}

if(!hasAcceptedTerms){
    console.log("Please accept the terms and condition to continue.")
}

//check both conditions
if(isLoggedIn && hasAcceptedTerms){
    console.log("Access granted")
}
else{
    console.log("Access denied!")
}