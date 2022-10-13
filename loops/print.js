'use strict';

let num = '';
let num1 = ' g ';

for(let i = 10; i <= 30; i++){
    num += i + num1;

    if (i % 2) {
        console.log(num);
    }

    if (i % 3) {
        console.log(num);
        
    }

   if (i % 4) {
    console.log(num);
    
   }

if (i % 5) {
    console.log(num);
    
}

}

console.log(num);