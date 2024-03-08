function removeDuplicates(nums: number[]): number {
    //TC O(n), SC O(1)
    let count = 0;
    for(let i = 2; i < nums.length; i++){
        if(nums[i - count - 2] == nums[i]){
            count++;
        }else{
            nums[i - count] = nums[i];
        }
    }
    return nums.length - count;
};