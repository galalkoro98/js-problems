'use strict';

// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.


const getFirstElement = (arr, n=1) => {
    
    return arr.slice(0, n);
}


console.log(getFirstElement(['a', 'b', 'c', 'd', 'e']));
console.log(getFirstElement(['a', 'b', 'c', 'd', 'e'], 2));
console.log(getFirstElement(['a', 'b', 'c', 'd', 'e'], 3));
console.log(getFirstElement(['a', 'b', 'c', 'd', 'e'], 0));