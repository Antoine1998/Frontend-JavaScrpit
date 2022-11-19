// Return the summ of two Numbers
// Q. Create a function that takes two arguments as functions and return their sum

function addition (num1, num2) {
    return num1 + num2;
}

console.log(addition(3, 2))
console.log(addition(-3, -6))
console.log(addition(7, 3))

// Q2. Convert hours into seconds

function hoursIntoSeconds (hours) {
    return hours * 3600;
}

console.log(hoursIntoSeconds(2))
console.log(hoursIntoSeconds(10))
console.log(hoursIntoSeconds(24))

//Q3 Calculate the perimeter of a rectangle

function calcPerimeter(width, length) {
    return (width + length) *2
}

console.log(calcPerimeter(6,7))
console.log(calcPerimeter(20, 10))
console.log(calcPerimeter(2,9))

//Q4 Calculate the area of a triangle 

function calcTriangleArea (base, height) {
    return base * height * 0.5  //leave spaces between mathmatical operations easier to read
}

console.log(calcTriangleArea(3, 2))
console.log(calcTriangleArea(10, 10))
console.log(calcTriangleArea(20, 20))


//Q5 Extend a String
//Write a function accepts a string and adds "Frontend" onto the end of it

function appendFrontend (str) {
    return str + 'Frontend' 
}

console.log(appendFrontend("Apple"))
console.log(appendFrontend("Banana"))
console.log(appendFrontend("Orange"))

//****Note****: to convert a string to a number, add (+) plus before the variable name with no spaces

function stringToNum (num) {
    return 4 + +num
}

console.log(stringToNum('4'))

// Q6. Return true if the sum of two numbers is greater than 100

function sumGreaterThan100 (num3, num4) {
    return num3 + num4 > 100
}

console.log(sumGreaterThan100(20, 10))
console.log(sumGreaterThan100(50, 60))
console.log(sumGreaterThan100(100, -50))

// Q7. Check if the number is greater or less than 0

function lessThanOrEqualToZero (num5) {
    return num5 <= 0
}

console.log(lessThanOrEqualToZero(3))
console.log(lessThanOrEqualToZero(0))
console.log(lessThanOrEqualToZero(-34))

// Q8. Give opposite boolean

function oppositeBoolean (boolean) {
    return !boolean
}

console.log(oppositeBoolean(false))
console.log(oppositeBoolean(true))

//Q9. Return true if the number is not 0

function isNotZero(num6) {
    return num6 !== 0
}

console.log(isNotZero(5))
console.log(isNotZero(0))
console.log(isNotZero(null))

// Q10. Calculate the remainder

function calcRemainder(num7, num8){
    return num7 % num8
}

console.log(calcRemainder(4, 2))
console.log(calcRemainder(7, 8))
console.log(calcRemainder(9, 8))

// Q11. Find the odd number

function isOdd (num9) {
    return num9 % 2 !== 0
}

console.log(isOdd(6))
console.log(isOdd(5))
console.log(isOdd(0))


//Q12. Return 1 if the number is even otherwise return -1

//method 1 
function booleanInteger(num10) {
    if (num10 % 2 == 0) {
        return 1 
    }
    return -1
}

console.log(booleanInteger(1))
console.log(booleanInteger(2))
console.log(booleanInteger(5))

// method 2 ternary operator

function booleanInteger2 (num11) {
    return num11 % 2 == 0 ? 1 : -1;   
}

console.log(booleanInteger2(1))
console.log(booleanInteger2(4))
console.log(booleanInteger2(7))

//Q13. Check if a user is logged in AND subscribed

function isLoggedInAndSubscribed (Logged, Subscribe) {
    return Logged === 'Logged_In' && Subscribe === 'Subscribed' ? true : false
}

console.log(isLoggedInAndSubscribed('Logged_In', 'Subscribed'))
console.log(isLoggedInAndSubscribed('Logged_In', 'UnSubscribed'))
console.log(isLoggedInAndSubscribed('Logged_Out', 'Subscribed'))