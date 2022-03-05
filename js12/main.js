//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function onlyEven(arr){
    let onlyEven = []
    arr.forEach( (e) => {
        if(e % 2 === 0){
            onlyEven.push(e)
        }
    })
    return onlyEven
}

console.log(onlyEven([1,2,3,4,5,6]))