/*Create a function that takes an array 
of strings and numbers, 
and filters out the array 
so that it returns an array of integers only.

tip:use filter method 


filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]

filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]

filterArray(["Nothing", "here"]) ➞ []

*/

const filterArray = arr => {
    const arrFilter = arr.filter(item => typeof item === 'number');
    return arrFilter;

}

console.log(filterArray([1, 2, 3, "a", "b", 4]));
console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]));
console.log(filterArray(["Nothing", "here"]));
