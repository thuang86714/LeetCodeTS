function minDifference(nums: number[]): number {
    let n = nums.length;
    if(n <= 4){
        return 0;
    }
    nums.sort((a, b)=> a - b);
    let ans = 1e10;
    for(let i = 4; i > 0; i--){
        ans = Math.min(ans, nums[n - i] - nums[4 - i]);
    }
    return ans;
};