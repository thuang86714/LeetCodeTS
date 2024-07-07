function removeDuplicates(nums: number[]): number {
    let count = 0;
    for(let idx = 1; idx < nums.length; idx++){
        if(nums[idx] == nums[idx - 1]){
            count++;
        }else{
            nums[idx - count] = nums[idx];
        }
    }
    return nums.length - count;
};