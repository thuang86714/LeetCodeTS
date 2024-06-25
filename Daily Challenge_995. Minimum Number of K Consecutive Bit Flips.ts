function minKBitFlips(nums: number[], k: number): number {
    //credit to votrubac, solution2, TC O(n), SC O(n)
    let res = 0;
    const flipTrackArray: number[] = [];
    for(let idx = 0; idx < nums.length; idx++){
        if(nums[idx] != (flipTrackArray.length%2 === 1? 0: 1)){
            res++;
            //the lst idx would be affected by cur sliding window
            flipTrackArray.push(idx + k - 1);
        }
        //meaning the sliding window is moving out of this range, the old bit would not be fliped anymore
        if(flipTrackArray.length != 0 && flipTrackArray[0] <= idx){
            flipTrackArray.shift();
        }
    }
    if(flipTrackArray.length === 0){
        return res;
    }
    return -1;
};

/*
function minKBitFlips(nums: number[], k: number): number {
    //credit to votrubac, TC O(n), SC O(1)
    //we can track the total number of flips, and use the source array to mark flips with negative values.
    let res = 0, flipRemainedCount = 0;
    for(let idx = 0; idx < nums.length; idx++){
        if(nums[idx] == flipRemainedCount%2){
            if(idx > nums.length - k){
                return -1;
            }
            res++;
            flipRemainedCount++;
            nums[idx] -= 2;
        }
        if(idx >= k - 1 && nums[idx - k + 1] < 0){
            flipRemainedCount--;
            nums[idx - k + 1] += 2;
        }
    }
    return res;
};
*/