function sumByTwo(array, target_sum){
    var tempArray = []; // it will store elements of given 
    //array which are already accessed
    // will take O(n) space
    var i;
    // will take O(n) time complexity
    for(i=0; i<array.length; i++){
        var temp = target_sum-array[i];
        if(tempArray.includes(temp)){
            // means temp+array[i] = target_sum
            return [temp, array[i]];
        }
        else{
            //pushing array elements in tempArray
            tempArray.push(array[i]);
        }
    }
    return "No such pair found";
}
var result = sumByTwo([4,5,-12,-2,8,9], -3);
console.log(result);
