'use strict';

//Write a function called findFileFormat that takes a string as an argument which returns the correct format of the uploaded file.

//findFileFormat(”image.png”) ⇒ png

//findFileFormat(”nature.pdf”) ⇒ pdf

//findFileFormat(”baby.jpeg”) ⇒ jpeg

//Tips : [String split method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)



const findFileFormat = (string) => {

    // your code here
    const extensionFile = string.split('.'); 
    console.log(extensionFile[0]);
    return extensionFile;
   
}

console.log(findFileFormat('nature.pdf'));