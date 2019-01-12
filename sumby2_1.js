function sumByTwo(array, target_sum){
    var i, j;
    for(i=0; i<array.length; i++){
        for(j=i+1; j<array.length; j++){
            if(array[i]+array[j]==target_sum){
                //found, return
                return [array[i], array[j]];
            }
        }
    }
    return "No such pair found";
}
var result = sumByTwo([4,5,-12,-2,8,9], -14);
console.log(result);
