function numSubarraysWithSum(nums: number[], goal: number): number {
    //credit to lee215 and Ruolinbi, TC O(n), SC O(1)
    const atMostSubArray = (nums: number[], goal: number): number=>{//atMost(A, S) counts the number of the subarrays of A the sum of which is at most(less than or equal to) S.
        if(goal < 0){
            return 0;
        }
        let left = 0, right = 0, ans = 0;
        for(; right < nums.length; right++){
            goal -= nums[right];
            while(goal < 0){
                goal += nums[left];//Through this process, we can count the number of the subarrays.
                left++;
            }
            ans += (right - left + 1);
        }
        return ans;
    };
    return atMostSubArray(nums, goal) - atMostSubArray(nums, goal - 1);
};