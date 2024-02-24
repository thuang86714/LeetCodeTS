function findMaxAverage(nums: number[], k: number): number {
    let sum = 0;
    for(let i = 0; i < k; i++){
        sum += nums[i];
    }
    let temp = sum;
    for(let i = 0; i < nums.length - k; i++){
        temp -= nums[i];
        temp += nums[i + k];
        sum = Math.max(sum, temp);
    }
    return sum/k;
};