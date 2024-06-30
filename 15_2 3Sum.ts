function threeSum(nums: number[]): number[][] {
    const ansArray: number[][] = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let target = -nums[i], left = i + 1, right = nums.length - 1;
        while (left < right) {
            let curSum = nums[left] + nums[right];
            if (curSum === target) {
                ansArray.push([nums[i], nums[left], nums[right]]);

                while (left <= right && nums[left] === nums[left + 1]) {
                    left++;
                }
                while (left <= right && nums[right] === nums[right - 1]) {
                    right--;
                }
                left++;
                right--;
            } else if (curSum > target) {
                right--;
            } else if (curSum < target) {
                left++;
            }
        }
    }
    return ansArray;
};