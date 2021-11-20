function birthdayCakeCandles(candles) {
    var max = candles[0]
    var count = 0
    for (var i=0 ; i<candles.length ; i++){
        if (max < candles[i]) { 
            max=candles[i]
        }
    }
    for(var j=0;j<candles.length;j++){
        if(candles[j]==max){
            count = count + 1
        }
    }return(count);
   
}
array = [2,2,3,5,2,6,6,6]
console.log(birthdayCakeCandles(array))