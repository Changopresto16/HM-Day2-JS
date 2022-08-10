


//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}




for(let i = 0; i < Object.keys(person3).length; i++){
    if(Array.isArray(Object.values(person3)[i])){
        console.log(Object.values(person3)[i])
    }
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo = () => {
        return `Name: ${this.name}\n Age: ${this.age}`
    }

    countUp = (() => {
        return function() {return this.age++}
    })()
}

let man1 = new Person('Bill', 1007);
let man2 = new Person('Ted', 1010);
console.log(man1.printInfo())
console.log(man2.printInfo())
console.log(man1.countUp())
console.log(man1.countUp())
console.log(man1.countUp())
 
// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isGreaterNumber = (string) => {
    return new Promise( (resolve,reject) => {
        if( string.length >= 10){
            resolve()
        } else {
            reject()
        }
    })
}


isGreaterNumber('big')



.then( (result) => {
    console.log(`Big word ${result}`)
})
.catch( (error) => {
    console.log(`Small Number ${error}`)
})




/*================================CODE WARZ BABY=========================================*/

////////////// QUESTION#1

//Build a function that returns an array of integers from n to 1 where n>0.

//Example : n=5 --> [5,4,3,2,1]



const reverseSeq = n => {
    let solution = [];          
    
    for (let i=n; i>0; i--){  
      solution.push(i);         
    }
    
    return solution;            
  };

  ////////////// QUESTION#2

  //Write a function that accepts an integer n and a string s as parameters, 
  //and returns a string of s repeated exactly n times.

  function repeatStr (n, s) {
    var str="";
    for(var i=0; i < n; i++)
      str+=s;
      return str;
  }

  console.log(n)