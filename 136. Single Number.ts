function singleNumber(nums: number[]): number {
    //credit to Aryan3212, TC O(n), SC O(1)
    return nums.reduce((prev, val) => prev ^ val, 0)
};