'use strict';

//Write a function that returns items that include “c” in it.

const checkLetterC = arr=> {
  let emptyString = ' ';
  arr.forEach(item => {
    console.log(item.length);
    
    emptyString = item.includes('c');
    console.log(emptyString);
    
  });

  return emptyString;
  
}


const languages = [
"JavaScript",
"Python",
    "Ruby",
    "C",
    "C++",
    "Swift",
    "PHP",
    "Java"
  ];
console.log(checkLetterC(languages));