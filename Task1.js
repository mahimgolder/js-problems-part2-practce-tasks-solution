// Task -1:
// Find the lowest number in the array below.
// const numbers = [167, 190, 120, 165, 137];

function getLowestNumber(numbers){
    let lowest = numbers[0];
    for(let i = 1; i < numbers.length; i++){
        if(numbers[i] < lowest){
            lowest = numbers[i]
        }
    }
    
    return lowest;
}
const numbers = [167, 190, 120, 165, 137];
const lowest = getLowestNumber(numbers);
console.log(lowest);


