'use strict';


//Write a function called findFileFormat that takes a array as an argument which returns the correct format of the uploaded file.

//findFileFormat(["image.png","nature.svg"]) => ["png","svg"]




const findFileFormat = (arrayFormat)=>{
    let myResult = [];
    arrayFormat.forEach(item=> {

        const format = item.split('.')[1];
        const itemFormat = [format];
        myResult = myResult.concat(itemFormat);

        
    })
    
   
    return arrayFormat;
}

console.log(findFileFormat(["image.png", "nature.svg"]));
