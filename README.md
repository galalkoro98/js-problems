# JavaScript-problems

js mini project to master a javascript

<code>

- Write a function called sumAll that takes a number as an argument.
- This function should sum the numbers up to that number as a result (number inclusive)
- Number should be bigger than 1 if it is not return "Please enter a number bigger than 1"
use while loop

 sumAll (5) => should return 15 => 0+1+2+3+4+5 = 15

</code>

```
function oldest(people) {
  const ages = Object.values(people);
  const oldest = ages.sort(sortNum)[ages.length - 1]
  return Object.keys(people).filter(name => people[name] === oldest) + ''
}
function sortNum(a, b) {
  return a - b;
}

```

```
function oldest(people) {
  let oldestAge=0;
  let person;
  for (let key in people){
    if(oldestAge<people[key]){
      oldestAge=people[key];
      person=key;
    }
  }
  return person;
}
```

```
const people = {
 Emma: 71,
 Jack: 45,
 Amy: 15,
 Ben: 29
} 

function oldest(people) {
  
  
  const values = Object.values(people);

const max = Math.max(...values);
console.log(max);

let age = '';
for(let name in people) {
  age = people[name];
  
  if(age === max){
     return name;
  }
}
  
}

console.log(oldest(people));
```

```
function oldest(people) {
 let max = 0;
 Object.values(people).forEach(item => {
  if (item > max){
   max = item;
  }
 });
 console.log(Object.keys(people).find(key=>people[key] === max));
};
```

```
function oldest(people) {
 let max;
 max=Object.values(people);
 console.log(Object.keys(people).find(key=>people[key] === Math.max(...max)));
};
oldest(oldest);
```

```
function oldest(people) {
 const ages = Object.values(people);
 const maxAge = Math.max(...ages)
 return Object.keys(people).find(key => people[key] === maxAge)
}
```
