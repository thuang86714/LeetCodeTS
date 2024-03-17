function rob(nums: number[]): number {
    //TC O(n), SC O(1)
    if(nums.length <= 2){
        return Math.max(...nums);
    }
    let oneStep = Math.max(nums[0], nums[1]), twoStep = nums[0], cur = 0;//oneStep and twoStep away from cur step
    for(let i = 2; i < nums.length; i++){
        cur = Math.max(oneStep, twoStep + nums[i]);
        twoStep = oneStep;
        oneStep = cur;
    }
    return cur;
};