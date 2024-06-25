function atMostCount(nums: number[], k: number): number {
    let res = 0, left = 0;
    for (let right = 0; right < nums.length; right++) {
        k -= nums[right] % 2;
        while (k < 0 && left < nums.length) {
            k += nums[left] % 2;
            left++;
        }
        res += right - left + 1;
    }
    return res;
}
function numberOfSubarrays(nums: number[], k: number): number {
    return atMostCount(nums, k) - atMostCount(nums, k - 1);
};