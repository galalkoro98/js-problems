//Given an object containing the names and
//ages of a group of people,
//return the name of the oldest person.
/*
oldest({
 Emma: 71,
 Jack: 45,
 Amy: 15,
 Ben: 29
}) ➞ "Emma"

oldest({
 Max: 9,
 Josh: 13,
 Sam: 48,
 Anne: 33
}) ➞ "Sam"
*/

// function group(name, age) {
//     this.name = name;
//     this.age = age;
    
// }

exports.oldest = function(people){
 
    const maxValue = Math.max(...Object.values(people))
    const oldestName = Object.keys(people).filter(key => people[key]==maxValue);
    return oldestName;

}

// console.log(oldest({Max: 9, Josh: 13, Sam: 48, Anne: 33})); // sam
// console.log(oldest({Emma: 71, Jack: 45, Amy: 15, Ben: 29})); // Emma

