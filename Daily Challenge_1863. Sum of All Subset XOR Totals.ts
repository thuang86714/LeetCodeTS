let sum: number;
function findEachSubsetSum(nums: number[], idx: number, curXorVal: number){
    if(idx === nums.length){
        sum += curXorVal;
        return;
    }

    findEachSubsetSum(nums, idx + 1, curXorVal ^nums[idx]);
    findEachSubsetSum(nums, idx + 1, curXorVal);
}
function subsetXORSum(nums: number[]): number {
    //TC O(2^n), SC O(n)
    sum = 0;
    findEachSubsetSum(nums, 0, 0);
    return sum;
};