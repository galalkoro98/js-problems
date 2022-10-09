'use strict';

//Write a function called sumAll that takes a number as an argument.
//This function should sum the numbers up to that number as a result (number inclusive)
//Number should be bigger than 1 if it is not return "Please enter a number bigger than 1"
//use while loop

// sumAll (5) => should return 15 => 0+1+2+3+4+5 = 15


function sumAll (number){
    let sum = 0;

    if (number <= 1) {
        return "please type bigger than 1"
    }

    while (number >= 0) {
        sum += number;
        console.log('+' + number);
        number--;
        
    }
    return sum;
}

console.log( '= ' + sumAll(5));