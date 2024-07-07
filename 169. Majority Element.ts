function majorityElement(nums: number[]): number {
    //TC O(nlogn)
    nums.sort((a, b) => a - b);
    let mid = Math.floor(nums.length/2);
    return nums[mid];
};