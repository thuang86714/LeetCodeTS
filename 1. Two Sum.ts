function twoSum(nums: number[], target: number): number[] {
    const numMap: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        numMap.set(nums[i], i);
    }

    for (let i = 0; i < nums.length; i++) {
        let curTarget = target - nums[i];
        if (numMap.has(curTarget) && i !== numMap.get(curTarget)) {
            return [i, numMap.get(curTarget)!];
        }
    }
    return [-1, -1];
};