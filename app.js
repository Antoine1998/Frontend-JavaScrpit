// Q1. Given two values, return the first one if it is falsy,
// otherwise return the second one

function filterOutFalsy(elem1, elem2) {
  return !elem1 ? elem1 : elem2;
}

console.log(filterOutFalsy(0, 500));
console.log(filterOutFalsy(false, 100));
console.log(filterOutFalsy(true, "Dog"));

/* method 2 to solve the question
function falsyOrTruthy(elem1, elem2) {
if (!elem1) {
    //return the element 
    return elem1;
}
else {
    return elem2
}
}

console.log(falsyOrTruthy(0, 500))
console.log(falsyOrTruthy(false, 100))
console.log(falsyOrTruthy(true, 'Dog'))
*/

// Q2. Return the length of an array

function arrLength(arr) {
  return arr.length;
}

console.log(arrLength([1, 2, 3]));
console.log(arrLength([5, 0, 4, -1]));
console.log(arrLength([]));

//Q3. Get the last element of an array

function lastElem(arr2) {
  return arr2[arr2.length - 1]; //arr2[element index last]
}

console.log(lastElem([1, 2, 3, 5]));
console.log(lastElem(["dog", "cat", "ball"]));
console.log(lastElem([true, false, true]));

// Q4. Find the sum all elements of an array
let sum = 0;
function arrSum(arr3) {
  for (let i = 0; i < arr3.length; i++) {
    sum = sum + arr3[i];
  }
  return sum;
}

console.log(arrSum([2, 2, 4]));
console.log(arrSum([100, 200, 500]));
console.log(arrSum([0, -5, -10]));

// Q5. Give a sum of all numbers from 1 to the number

function progressiveSum(num1) {
  let sum2 = 0;
  for (let i = num1; i > 0; i--) {
    sum2 = sum2 + i;
  }
  return sum2;
}

console.log(progressiveSum(4));

// Q6. Calculate the time from seconds to mm:ss
function calcTime(sec) {
  return Math.floor(sec / 60) + ":" + (sec % 60); //Math.floor round the result down
}
console.log(calcTime(66)); //results will be 1:6
// To convert the time to mm:ss

function calcTime2(seconds) {
  let timeMinutes = Math.floor(seconds / 60);
  let timeSeconds = seconds % 60;

  if (timeMinutes.toString().length == 1) {
    timeMinutes = "0" + timeMinutes;
  }
  if (timeSeconds.toString().length == 1) {
    timeSeconds = "0" + timeSeconds;
  }
  return timeMinutes + ":" + timeSeconds;
}
console.log(calcTime2(66)); //results displayed as 01:06

// Q7. Find the largest number in array
function getMax(arr4) {
  let high = arr4[0];

  for (let i = 0; i <= arr4.length; i++) {
    if (arr4[i] > high) {
      high = arr4[i];
    }
  }
  return high;
}

console.log(getMax([400, 2000, 3, 7000]));
console.log(getMax([12, 10, -20, 1]));
console.log(getMax([-300, -100, -200]));

//Q8. Return the reverse of a  string

function reverseString(str1) {
  let reverseString = ""; //the variable will store each letter of str in reverse
  for (let i = str1.length - 1; i >= 0; i--) {
    reverseString = reverseString + str1[i];
  }
  /* Use incremental loop
    for (let i = 0; i < str4.length; i++) {
        reverseString = str4[0] +reverseString;
    }
    */
  return reverseString;
}

console.log(reverseString("David"));
console.log(reverseString("cba "));
console.log(reverseString("David"));

/*
 IMPOTANT
    To change a string to an array we use split()
 */

// Q9 Convert every element in an array to zero
//using fill()

function convertToZero(arr5) {
  return new Array(arr5.length).fill(0);
}

// method 2 useing for loop
/*
function convertToZero(arr5) {
     for (let i = 0; i <arr5.length; i++) {
        arr5[i] = 0;
     }
     return arr5
}
*/
// method 3 using map
function convertToZeros(arr6) {
  return arr6.map((elem3) => elem3 * 0); //multiple each element by 0
}

console.log(convertToZeros([1, 2, 3]));
console.log(convertToZeros([1, 2, 3, 9]));
console.log(convertToZeros([-1, -2, -4]));

//Q10 Remove an item from an array
function removeApples(arr7) {
    let noApples = []
  for (let i = 0; i < arr7.length; ++i) {
    if ((arr7[i] !== "Apple")) {
      noApples.push(arr7[i]); //add the element to the new array 
    }
  }
  return noApples;
}

console.log(removeApples(["banana", "Apple", "Orange", "Pineapple"]));

//method 2 using filter function

/*
function removeApples(arr7) {
    return arr7.filter(elem => elem === 'Apple')
}
console.log(removeApples(["banana", "Apple", "Orange", "Pineapple"]));
*/

//Q11. Filter all falsy values
function filterOutFaalsy(arr8) {
    return arr8.filter(elem => !elem === false)
}

console.log(filterOutFaalsy(['', [ ], 0, null, undefined, "0"]))
console.log(filterOutFaalsy(['Tomato', 'Orange', false, 'Banana', 0]))
console.log(filterOutFaalsy(['', [ ], 0, null, undefined, "0"]))

// Q12 Give the boolean counterpart of an element in an array 
function convertToBoolean(arr9) {
    return arr9.map(elem => !!elem)

}
console.log(convertToBoolean([55, null, "oil", false, "tony", undefined, []]))
