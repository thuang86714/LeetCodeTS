function removeElement(nums: number[], val: number): number {
    let count = 0;
    for (let idx = 0; idx < nums.length; idx++) {
        if (nums[idx] === val) {
            count++;
        } else {
            nums[idx - count] = nums[idx];
        }
    }
    return nums.length - count;
};