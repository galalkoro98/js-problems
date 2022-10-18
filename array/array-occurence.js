'use strict'; 

// Write a function that checks the occurrence of "a" and "b" to see if a string has the same amount of 'a's and 'b's. 
// The method must return a boolean and be case insensitive.
// The string can contain any char.


// abTest("aabb") => should return true
// abTest("baabb") => should return false
// abTest("aabBm") => should return true
// abTest("zpzpzpp") => should return true // when no 'a' and 'b' is present should return true
// // abTest("zzaa") => should return false

const abTest =  str => {
    
    let occurrenceA = 0;
    let occurrenceB = 0;
    
    for(let i = 0; i < str.length; i++){
        if (str.toLowerCase().charAt(i) == 'a') {
            occurrenceA = occurrenceA +1;
        }

        if (str.toLowerCase().charAt(i) == 'b') {
            occurrenceB = occurrenceB + 1;  
        }
    }
     if (occurrenceA == occurrenceB) {
                    return true;
                }else{
                     return false;
                    }
                }
/*
 function abTest(str) {
    const myArray = str.toLowerCase().split("");
    const occurenceOfA = myArray.filter((item) => item === "a").length;
    const occurenceOfB = myArray.filter((item) => item === "b").length;
    return occurenceOfA === occurenceOfB;
  }
  */

    console.log(abTest("aabb"));
    console.log(abTest("baabb"));
    console.log(abTest("aabBm"));
    console.log(abTest("zpzpzpp"));
    console.log(abTest("zzaa"));

    // console.log(abTest(["aabb"]));
    // console.log(abTest(["baabb"]));
    // console.log(abTest(["aabBm"]));
    // console.log(abTest(["zpzpzpp"]));
    // console.log(abTest(["zzaa"]));