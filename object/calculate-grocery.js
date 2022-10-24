'use strict';


// Your uncle who runs a local grocery store heard that you have been studying JavaScript.
// He has a problem with his accounts and decided to ask you for help.
// He has a cashier whom he thinks might be stealing.
// In order to check past accounts he needs a program that ll tell him how much money should have been
// in the safe for a given day.
// He asks you to write a function that ll accept two arrays(one earnings which can be positive numbers or zero,
// another one with spending's which can be negative numbers and zero) and a weekday, and returns the total amount of cash that should have been in the safe at the end of the given day.
// Example:
// calculateEarnings([40, 30, 25, 10, 39, 99, 100], [-10, -5, -20, -3, -5, -9, -10], 'Wednesday') // 60
// calculateEarnings([4, 15, 50, 0, 39, 200, 0], [-80, -4, -56, 0, 0, -18, -30], saturDay) // 140  


const calculateEarnings = (earningsArr, spendingArr, day) =>{

    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const indexofday = weekdays.indexOf(day);
    
    const earnings = earningsArr.slice(0, indexofday +1);
    const spending = spendingArr.slice(0, indexofday +1);

    const totalAmount = [...earnings, ...spending].reduce((a, b) => a + b);
  
    return totalAmount;

}


 console.log(calculateEarnings([40, 30, 25, 10, 39, 99, 100], [-10, -5, -20, -3, -5, -9, -10], 'Wednesday'));
//  console.log(calculateEarnings([4, 15, 50, 0, 39, 200, 0], [-80, -4, -56, 0, 0, -18, -30], 'Saturday'));