'use strict'; 

// Write a function that takes a string as an argument. Your job is to return the middle character of the word. 

// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

const getMiddle = str =>{
    let wordPosition;
    let wordLength;

    if (str.length % 2 === 1) {
        wordPosition = str.length / 2;
        wordLength = 1
        
    }else{
        wordPosition = str.length / 2 - 1;
        wordLength = 2
    }
    return str.substring(wordPosition, wordPosition + wordLength);

}

console.log(getMiddle("test")); // should return "es"
console.log(getMiddle("testing")); // should return "t"
console.log(getMiddle("middle")); // should return "dd"
console.log(getMiddle("A")); // should return "A"