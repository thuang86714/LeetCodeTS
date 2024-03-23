function search(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    while(left <= right){
        let mid = left + Math.floor((right - left)/2);
        if(nums[mid] == target){
            return mid;
        }
        //find out how the array is rotated
        if(nums[mid] >= nums[left]){
            if(nums[mid] < target || nums[left] > target){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }else{
            if(nums[mid] > target || nums[right] < target){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
    }
    return -1;
};