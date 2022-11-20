// Q1 Show ratings 
// show a star for the rating and dot (.) for deciaml place
function showRating(rating) {
    let ratings = ""
    for (let i = 0; i < Math.floor(rating); i++) {
        ratings = ratings + "*"
        if (i !== rating - 1) {
            ratings = ratings + " "
            }
    }
    if (!Number.isInteger(rating)) {
        ratings = ratings + "."
    }
    return ratings
}
console.log(showRating(4.5))


// Q2 Sort numbers in an array
function sortLowToHigh(numbers) {
    return numbers.sort((a, b) => a - b);
}

console.log(sortLowToHigh([10, -5, 0, 8.7, 55, 4]));

//Q3 Sort objects by the highest to lowest price
function sortHighToLow(numbers) {
    return numbers.sort((a, b) => { 
        return b.price - a.price});
}

console.log(
    sortHighToLow([
        { id: 4, price: 50},    
        { id: 2, price: 00},    
        { id: 3, price: 500},    
    ])
    );
