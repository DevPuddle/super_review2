// *Variables*
// Create a variable and console log the value
let bringIt = console.log("Bring It On!")

// Create a variable, add 10 to it, and alert the value
let num = 0 
num += 10
alert(num)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub(n1, n2, n3, n4) {
    let subtraction = n1 - n2 - n3 - n4
    alert(subtraction)
}

// Create a function that divides one number by another and returns the remainder
function divides(num1, num2) {
    let remainder = num1 % num2
    return remainder
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addsTwo(num1, num2) {
    let sum = num1 + num2
    if(sum > 50 ) {
        alert('Jumanji')
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
    function multiply(num1, num2, num3) {
        let sum = num1 * num2 * num3
        if (sum % 3 === 0 ){
            alert('ZEBRA')
        }
    }
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function word(wrd, num){
    for(i = 0; i < num; i++){
        console.log(wrd)
    }
}
