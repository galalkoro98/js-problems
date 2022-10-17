'use strict';

//let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// write a function to check even numbers

// Output: [ 2, 4, 6, 8, 10 ]



//const result = numbers.filter("");
function checkEvenNumber(numbers) {
 
    numbers.forEach(num => {
        if (num % 2 === 0) {
            console.log(num); 
        };
    });
};

console.log(checkEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


