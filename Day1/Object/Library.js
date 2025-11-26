//simple libary management system

// Each book has title, author and year

//You need to create book object , display details and update the year

//Object creation using object literal

const book1 = {
    title: "JS Basics",
    author: "Ram Kumar",
    year: 2023,

    //Method to display book details
    getDetails: function(){
    console.log(`Tile ${this.title}, Author: ${this.author}, Year: ${this.year}`)
    },

    updateYear: function(newYear){
        this.year = newYear
    }
}

//display book details
book1.getDetails()

//Update year
book1.updateYear(2025)
book1.getDetails()


