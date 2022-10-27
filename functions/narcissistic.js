// 'use strict';

// A Narcissistic Number is a number which is the sum of its own 
// digits, each raised to the power of the number of digits.
// for example, 153 (3 digits), you can see 153 = 1^3 + 5^3 + 3^3
// here 3 is the number of digits contained in 153.
// your job to discover the narcissistic number form this example 

// const narcissistic = value =>{
//    let valueArr = value.toString();
//     valueArr = valueArr.split('');

//     let a = [];
//     let b = 0;

//     for(let i = 0; i < valueArr.length; ++i){
//         valueArr[i] = parseInt(valueArr[i]);
//         valueArr[i] = Math.pow(valueArr[i], valueArr.length);
//         a.push(valueArr[i]);
//         b = b + a[i];
//     };

//     if (b == value) {
//         value = true;
//     }else{
//         value = false;
//     }
//     return value;
// }

const narcissistic = (number) => {
    const numLength = number.toString().length;
    const numArr = number.toString().split('');
    const power = numArr.map(num => num ** numLength);
    let total = power.reduce((previousValue, currentValue) => previousValue + currentValue,0);
    if(total == number){
       total = true

}else{
     total = false;
}

return total;
    //return (total === number ? true : false);
  }

console.log(narcissistic(153)); // return true 
console.log(narcissistic(1634)) // return true 
console.log(narcissistic(234)) // return false
console.log(narcissistic(407)) // return true 