'use strict';

// function findLongestWordLength(str) {
//     // logic here
//     }
//     findLongestWordLength("Welcome to hack your future"); should return a number.
//     findLongestWordLength("Welcome to hack your future"); should return 7.
//     findLongestWordLength("Here we will learn the basics of web development") should return 11.

/*
const findLongestWordLength = (str) =>{

    const stringSplit = str.split(' '); // the empty string is to separate the word otherwise the word length will be one
    let longestWordLength = 0;

    for(let word = 0; word < stringSplit.length; word++){
        if (stringSplit[word].length > longestWordLength) {
            longestWordLength = stringSplit[word].length;
            // console.log(longestWordLength);
            
        }
    }
    return longestWordLength;
}
*/


/*

const findLongestWordLength = str =>{

  let longestWordLength = " ";
  str.forEach(string => {
    string.split(" ").forEach(word => {

        if (word.length > longestWordLength.length) {
            longestWordLength = word.length + ' ' + word;
           
            
        }
        //another way instead of if condition
        // longestWordLength = (word.length > longestWordLength.length) ?  word.length + ' '+ word: longestWordLength
    })
    
  });

  return longestWordLength;
    
}*/

const findLongestWordLength = str => {
    let longestWordLength = " ";
    str.split(" ").forEach(word => {
        if(word.length > longestWordLength){
            longestWordLength =  word.length //+ " " + word;
            //console.log(longestWordLength);
          
        }
    });
    return longestWordLength;
}

// this is option as well 
// const arr1 = ["Welcome to hack your future"];
// const arr2 = ["Here we will learn the basics of web development"];


console.log(" First sentence return number", findLongestWordLength("Welcome to hack your future"));
console.log(" Second sentence return number", findLongestWordLength("Here we will learn the basics of web development"));