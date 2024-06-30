function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0, ans = nums.length + 1, curSum = 0;
    for(let right = 0; right < nums.length; right++){
        curSum += nums[right];
        while(left <= right && curSum >= target){
            ans = Math.min(ans, right - left + 1);
            curSum -= nums[left];
            left++;
        }
    }
    if(ans == nums.length + 1){
        return 0;
    }
    return ans;
};