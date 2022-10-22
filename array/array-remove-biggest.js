'use strict';

// Write a function that takes an array as an argument and removes the biggest value of the given array. 
// Do not mutate the original array(you need to copy the given array. Remember which methods were using a copy of the original array or how you can copy an original array). 
// If multiple elements have the same value, remove the one with a lower index. 
// If you get an empty array, return an empty array.


const removeBiggest = arr =>{
    
  const copyArr = [...arr];
  const biggestValue = Math.max(...copyArr);
  
  const index = copyArr.findIndex((item) => item === biggestValue);
  copyArr.splice(index, 1);
  return copyArr;
  
}



// function removeBiggest(number) {
//  const copy = number.concat();
//  copy.splice(copy.indexOf(Math.max(...copy)), 1);
//  return copy;
// }

console.log(removeBiggest([1,2,6,4,5])); // output = [1, 2, 4, 5]
console.log(removeBiggest( [5,3,2,5,4])); // output = [3, 2, 5, 4]
console.log(removeBiggest([2,8,11,27,1],)); // output = [2, 8, 11, 1]
console.log(removeBiggest([])); // output = []