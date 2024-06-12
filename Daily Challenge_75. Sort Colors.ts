/**
 Do not return anything, modify nums in-place instead.
 */
 function sortColors(nums: number[]): void {
    //Dutch National Flag algo, TC O(n), SC O(1)
    let low = 0, high = nums.length - 1, mid = 0;
    while(mid <= high){
        if(nums[mid] === 0){
            let temp = nums[low];
            nums[low] = nums[mid];
            nums[mid] = temp;
            low++;
            mid++;
        }else if(nums[mid] === 1){
            mid++;
        }else{
            let temp = nums[high];
            nums[high] = nums[mid];
            nums[mid] = temp;
            high--;
        }
    }
};