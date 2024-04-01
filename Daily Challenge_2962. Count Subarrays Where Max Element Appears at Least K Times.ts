function countSubarrays(nums: number[], k: number): number {
    //credit to lee215, TC O(n), SC O(1)
    const curMax = nums.reduce(function(prev, current) {//find the max_element
    return (prev && prev > current) ? prev : current
    })
    let left = 0, maxCount = 0, subarrayCount = 0;
    for(let right = 0; right < nums.length; right++){
        if(nums[right] == curMax){
            maxCount++;
        }

        while(maxCount >= k){
            if(nums[left] == curMax){
                maxCount--;
            }
            left++;
        }
        subarrayCount += left;
    }
    return subarrayCount;
};