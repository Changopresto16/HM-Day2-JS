


//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string  passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max", "HAS", "PuRple", "dog"]


function findWords() {
    for (let i = 0; i < dog_names.length; i++) {
        const lowerCaseString = dog_string.toLowerCase();

        const lowerCaseDogName = dog_names[i].toLowerCase();

        if (lowerCaseString.includes(lowerCaseDogName)) {
            console.log("Matched dog_name " + dog_names[i]);

        } else {
            console.log("No Matches");
         }

    }

}
console.log(findWords())
//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */


let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr.splice(i, 1, 'even index')
        }
    }
    return arr
}
console.log(replaceEvens(arr));


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

////////////////////////////////////////CODEWARS/////////////////////////////////////////////

//Make a simple function called greet that returns the most-famous "hello world!".

//QUESTION #1

const greet = "hello world!";

console.log(greet)

//QUESTION #2

//Given an array of integers, return a new array with each value doubled.

const numss = [1,4,8,3,6,2] 

function maps(numss){
    
    let dbl = [];
    for(let i = 0; i < dbl.length; i++){
    dbl.push(x[i] * 2);
    }
    return dbl;
    }
console.log(numss);