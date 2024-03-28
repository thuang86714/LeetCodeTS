function maxSubarrayLength(nums: number[], k: number): number {
    //TC O(n), SC O(n)
    const numCountMap = new Map<number, number>();//<nums[i], count>
    let left = 0, maxLen = 0;
    for(let right = 0; right < nums.length; right++){
        numCountMap.set(nums[right], (numCountMap.get(nums[right]) || 0) + 1);
        while(numCountMap.get(nums[right])! > k){
            numCountMap.set(nums[left], (numCountMap.get(nums[left]) || 0) - 1);
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
};