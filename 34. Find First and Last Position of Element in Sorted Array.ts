function searchRange(nums: number[], target: number): number[] {
    //binary search to find the left and right bound. TC O(logn), SC O(1)
    let left = 0, right = nums.length - 1;
    const ans: number[] = [-1, -1];
    while(left <= right){//find the left bound
        const mid = left + Math.floor((right - left)/2);
        if(nums[mid] >= target){
            if(nums[mid] == target){
                ans[0] = mid;
            }
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }

    left = 0, right = nums.length - 1;
    while(left <= right){//find the right bound
        const mid = left + Math.floor((right - left)/2);
        if(nums[mid] <= target){
            if(nums[mid] == target){
                ans[1] = mid;
            }
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return ans;
};