const readline = require("readline-sync")
function birthdayCakeCandles(candles) {
    var max = candles[0]
    var count = 0
    for (var i=0 ; i<candles.length ; i++){
        if (max < candles[i]) { 
            max=candles[i]
        }
    }
    console.log("max number",max);
    for(var j=0;j<candles.length;j++){
        if(candles[j]==max){
            count = count + 1
        }
    }return(count);
   
}
element = readline.questionInt("How many element you want : ")
array = []
for(let item=0;item<element;item++){
    elementOfarray = readline.questionInt("Enter the element: ")
    array.push(elementOfarray) 
   
}
console.log(birthdayCakeCandles(array))
