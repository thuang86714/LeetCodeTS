/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
    //TC O(n), SC O(n)
    k %= nums.length;
    nums.reverse();
    const firstKArray: number[] = nums.slice(0, k);
    firstKArray.reverse();
    const theRestArray: number[] = nums.slice(k);
    theRestArray.reverse();
    nums.splice(0, nums.length, ...firstKArray, ...theRestArray);
};


function reverse(nums: number[], start: number, end: number): void {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

function rotate(nums: number[], k: number): void {
    //TC O(n), SC O(1)
    const n = nums.length;
    k %= n;

    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
}
