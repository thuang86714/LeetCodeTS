function twoSum(numbers: number[], target: number): number[] {
    //binary search, TC O(logn), SC O(1)
    let left = 0;
    let right = numbers.length - 1;
    while(left <= right){
        let curSum = numbers[left] + numbers[right];
        if(curSum == target){
            return [left + 1, right + 1];
        }else if(curSum < target){
            left++;
        }else{
            right--;
        }
    }
    return [];
};