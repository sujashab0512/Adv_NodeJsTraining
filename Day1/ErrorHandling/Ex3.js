function processPayment(balance, withdrawamount){
    try{
        if(withdrawamount>balance) throw new Error("Insufficient balance")
        return "Payment Successful"
    }
    catch(err){
        return err.message
    }
}

//console.log(processPayment(1000,2000))
console.log(processPayment(1000,200))