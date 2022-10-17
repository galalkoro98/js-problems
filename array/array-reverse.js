// nested object
// reverse items that have more than 5 char.

// ReverseArr(arr)

// console.log(ReverseArr([“hack”,”yourrr”,”feature”])) => [“rrruoy”,”erutaef”]
const ReverseArr = (arr) => {
    let resultArray = []
    arr.forEach(item => {
      const itemLength= item.length
      if(itemLength > 5){
      
        const reversedItem = item.split("").reverse().join("")
        console.log(reversedItem)
        resultArray.push(reversedItem)
      }
    })
    return resultArray
    
  }
  console.log(ReverseArr(["hack","yourrr","feature"]))