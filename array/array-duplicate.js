'use strict';

// Write a function that takes an array as an argument. 
// Your task is to write the repeating elements in the array at the end of the array. 
// Return the original array if no duplicate items. 
// If there is more than one repeating element, sort the repeating elements from smallest to largest.

const findDuplicate = arr =>{

    let copyArr = [...arr]; // copy the original array 

    // finding duplicate number
    let storeDuplicateNumber = []; // storing duplicate number
    arr.forEach(duplicateNumber => {
        copyArr.shift(); // remove the element of the first index
        if (copyArr.includes(duplicateNumber)) {
            storeDuplicateNumber.push(duplicateNumber);  
        }
    });
    
    // sorts the elements of an array in place and returns the reference to the same array, now sorted
    storeDuplicateNumber.sort(compareNumber);
    
    let repeatingResult = []; // storing repeating result 
    repeatingResult = arr.filter(repeatingValue => !storeDuplicateNumber.includes(repeatingValue));
    storeDuplicateNumber.forEach(duplicateValue => {
        repeatingResult.push(duplicateValue) + repeatingResult.push(duplicateValue);
        // repeatingResult.push(duplicateValue);
        
    });

  return repeatingResult;
}

// compare the array that duplicate and sorted
const compareNumber = (arrDuplicate, arrRepeating)=>{
    return arrDuplicate - arrRepeating;
}

console.log(findDuplicate([1,2,4,5,4,8])); // should return [1, 2, 5, 8, 4, 4]
console.log(findDuplicate([1, 2, 3])); // should return  [1, 2, 3]
console.log(findDuplicate([5,5,1,6,7,4])); // should return [1, 6, 7, 4, 5, 5]
console.log(findDuplicate([1,2,11,2,5,11])); // should return [1, 5, 2, 2, 11, 11]