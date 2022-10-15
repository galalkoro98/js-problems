'use strict';

function validateString(string) {

    let emptyString = '';
    let str = string;
  
   
 
    if (str === emptyString) {
        return "Can not be empty";
        
    }else if (str.length > 10) {
        return "long";
        
    } else if (str >= "@" || str === str.length + "@") {
        return "It should not include @";
        
    } else{
        return "successful";
    
    } 
    
    return str;
    
}

console.log(validateString("gggaaa"));

