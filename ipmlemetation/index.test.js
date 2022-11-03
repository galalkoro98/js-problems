const testingModule = require("./index");

describe("take two string and concatenate", ()=>{
    it("should concat string together", ()=>{
        let word1 = "a nice word";
        let word2 = "another nice word";
        expect(testingModule.concatString(word1, word2)).toEqual("a nice wordanother nice word");
    })

    it("should concat number together", ()=>{
        let word1 = 3;
        let word2 = 3;
        expect(testingModule.concatString(word1, word2)).toEqual(6);
    })


})
