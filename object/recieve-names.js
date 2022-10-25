'use strict';

// Write a function that receives names of students in the order of success in their class and a starting number and an ending number. It should return an array of the names of the students between those numbers(included).
// // Example: extractTheOrderOfSuccess(['Annie',  'Shirley', ,Abed', 'Britta', 'Troy', 'Jeff', 'Pierce' ], 2, 6) should return ['Shirley',Abed', 'Britta', 'Troy', 'Jeff']

const extractTheOrderOfSuccess = (names, starting, ending) =>{
    return names.slice(starting -1, ending);
    
}

console.log(extractTheOrderOfSuccess(['Annie',  'Shirley', 'Abed', 'Britta', 'Troy', 'Jeff', 'Pierce' ], 2, 6));
