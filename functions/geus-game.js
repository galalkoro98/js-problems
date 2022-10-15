'use strict';

//Write a function called guessGame that takes an argument as a number.

//Generate a number between 1,5 (inclusively).

//If your argument is bigger than generated number return “Bigger”

//If your argument is smaller than generated number return “Smaller”

//If your argument is equal to generated number return “Congrats”

//guessGame(5) and generated number is 3 ⇒ Bigger

//Tips : [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)


function guessGame(number) {
    for(let i = 1; i <= 5; i++){
        let argument;
        argument += i;

        if (number > 5 || number === 3) {
            return "Bigger";
            
        } else if (number < 1) {
            return "smaller";
            
        } else if(number === number){
            return "congrats";

        }

    }

    return argument;
    
}

console.log(guessGame(2));
