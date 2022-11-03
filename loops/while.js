'use strict';

// create a while to sum of 50;


let count = 0; // var count = 0;
let sum = 0; // var sum = 0;

while (count != 10) {
    if (count < 5) {
        sum = sum + count;
        
    }

    count = count + sum;
    
}

console.log(sum);