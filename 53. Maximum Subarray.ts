function maxSubArray(nums: number[]): number {
    //TC O(n), SC O(1)
    let curMax = -10001, maxi = -10001;
    for(let num of nums){
        curMax = Math.max(curMax + num, num);
        maxi = Math.max(maxi, curMax);
    }
    return maxi;
};

/*
function maxSubArray(nums: number[]): number {
    //TC O(n), SC O(n)
    const memoArray = Array(nums.length).fill(0);
    let maxi = -10001;
    for(let idx = 0; idx < nums.length; idx++){
        if(idx === 0){
            memoArray[idx] = nums[idx];
        }else{
            memoArray[idx] = Math.max(memoArray[idx - 1] + nums[idx], nums[idx]);
        }
        maxi = Math.max(maxi, memoArray[idx]);
    }
    return maxi;
};
*/