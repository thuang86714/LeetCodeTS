function minSwaps(nums: number[]): number {
    // TC O(n), SC O(1), credit to votrubac; Sliding window, ones is going
    // to be the window size
    let ones = 0, res = nums.length, j = 0, curOne = 0;
    const n = nums.length;
    for (let num of nums) {
        ones += num;
    }

    for (let i = 0; i < n; i++) {
        while (j - i < ones) {
            curOne += nums[j % n];
            j++;
        }
        res = Math.min(res, ones - curOne);
        curOne -= nums[i];
    }
    return res;
};