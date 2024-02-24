function missingNumber(nums: number[]): number {
    const lens = nums.length
    const curSum = nums.reduce((acc, cur) => acc + cur, 0)
    const sum = ((lens + 1)*lens)/2
    return sum - curSum
};