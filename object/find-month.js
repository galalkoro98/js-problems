'use strict';

// Write a function that gets a name of a month as a string and RETURNS which month of the year it is. iIf it is not a month it should return 0.
//  Example: findTheMonth(‘August’) should return 8
//                     findTheMonth(‘october’) should return 10
//                     findTheMonth(‘Tuesday’) should return 0

const findTheMonth = str => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const indexofmonth = months.indexOf(str)
    return indexofmonth +1;

}

console.log(findTheMonth('August'));
console.log(findTheMonth('October'));
console.log(findTheMonth('Tuesday'));