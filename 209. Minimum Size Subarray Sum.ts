function minSubArrayLen(target: number, nums: number[]): number {
    //TC O(n), SC O(1)
    let [curSum, left, right, curMin] = [0, 0, 0, nums.length + 1];
    while(right < nums.length){
        curSum += nums[right];
        while(left <= right && curSum >= target){
            curMin = Math.min(curMin, right - left + 1);
            curSum -= nums[left];
            left++;
        }
        right++;
    }
    if(curMin == nums.length + 1){
        return 0;
    }
    return curMin;
};