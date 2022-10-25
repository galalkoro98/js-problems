'use strict';

// Write a function that takes the sum of the elements of an array.
// Example calculateTheSum([4, 8, 15, 16, 23, 42])

const calculateTheSum = arr =>{
    const element = arr.reduce((a, b) => a + b);  return element;
}

console.log(calculateTheSum([4, 8, 15, 16, 23, 42]));
