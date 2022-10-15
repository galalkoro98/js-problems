'use strict';

const findEvenSums = (a, b)=>{
    const maxNumber = Number(Math.max(a, b));
    const minNumber = Number(Math.min(a, b));
    let total = 0;

    for(let i = minNumber; i <= maxNumber; i++){
        if (i % 2 === 0) {
            console.log(i);
            total = total + i;
            
        }
    }
    console.log({total});

    return total;

}

console.log(findEvenSums("15", "10"));