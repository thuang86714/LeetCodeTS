function minimizeArrayValue(nums: number[]): number {
    //credit to lee215, TC O(n), SC O(1)
    /*
    The ceil average with sum of i + 1 number:
    ceil(double(sum) / (i + 1))

    We can also do integer division:
    (sum + i) / (i + 1)
    */
    let sum = 0, res = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        res = Math.max(res, Math.ceil(sum/(i + 1)));
    }
    return res;
};