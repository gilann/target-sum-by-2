function sumByTwo(array, target_sum){
    array.sort(); //which will take O(nlogn)
    var left=0;
    var right=array.length-1;
    //while loop will take O(n)
    while(left<right){
        sum = array[left]+array[right];
        if(sum==target_sum){
            return [array[left], array[right]];
        }
        else if(sum>target_sum){
            right--;
        }
        else{
            left++;
        }
    }
    return "No such pair found";
}
var result = sumByTwo([4,5,12,-2,8,9], 7);
console.log(result);
