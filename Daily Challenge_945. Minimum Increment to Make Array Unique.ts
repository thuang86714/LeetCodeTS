function minIncrementForUnique(nums: number[]): number {
    //TC O(nlogn), SC O(1)
    nums.sort((a, b) => a - b);
    let count = 0;
    for(let i = 1; i < nums.length; i++){
        const diff = nums[i - 1] + 1 - nums[i];
        if(diff > 0){
            count += diff;
            nums[i] += diff;
        }
    }
    return count;
};