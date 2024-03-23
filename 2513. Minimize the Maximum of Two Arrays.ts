function longestOnes(nums: number[], k: number): number {
    let zeroCount = 0,  maxLen = 0, left = 0;
    for(let right = 0; right < nums.length; right++){
        if(nums[right] == 0){
            zeroCount++;
        }

        while(zeroCount > k){
            if(nums[left] == 0){
                zeroCount--;
            }
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;

};