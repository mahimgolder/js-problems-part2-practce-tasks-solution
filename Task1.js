// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function getLowestNumber(heights2){
    let lowest = 167;
    for(const height of heights2 ){
        if(height < lowest){
            lowest = height;
        }
    }
    return lowest;
}
const heights2 = [167, 190, 120, 165, 137];
const lowest = getLowestNumber(heights2);
console.log(lowest);


