function findDuplicates(nums: number[]): number[] {
    //credit to suman_buie, TC O(n), SC O(1)
    const ans: number[] = [];
    for(let num of nums){
        if(nums[Math.abs(num) - 1] < 0){//meaning we have visited this number before
            ans.push(Math.abs(num));
        }
        nums[Math.abs(num) - 1] = -nums[Math.abs(num) - 1];
    }
    return ans;
};