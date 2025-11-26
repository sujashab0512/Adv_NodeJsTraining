//Validate user input in form

function getAge(age){
    try{
        if(age<0) throw new Error("Age value cannot be negative")
        return age;
    }
    catch(err){
        return err.message
    }
}

console.log(getAge(-5))