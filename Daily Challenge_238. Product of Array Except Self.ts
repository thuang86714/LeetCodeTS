function productExceptSelf(nums: number[]): number[] {
    //TC O(n), SC O(1)
    const res = new Array(nums.length).fill(0);
    let prefix = 1, postfix = 1;
    for(let i = 0; i < nums.length; i++){
        res[i] = prefix;
        prefix *= nums[i];
    }
    for(let i = nums.length - 1; i >= 0; i--){
        res[i] *= postfix;
        postfix *= nums[i];
    }
    return res;
};