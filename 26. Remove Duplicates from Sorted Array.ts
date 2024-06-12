function removeDuplicates(nums: number[]): number {
    //TC O(n), SC O(1)
    let count = 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] == nums[i - 1 - count]){
            count++;
        }else{
            nums[i - count] = nums[i];
        }
    }
    return nums.length - count;
};