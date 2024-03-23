function findPeakElement(nums: number[]): number {
    //using binary search to find the peak of any rising slope
    //TC O(logn), SC O(1)
    let left = 0, right = nums.length - 1;
    while(left < right){//if we use "<=" instead, would result in TLE. Take left =4 , right = 4 as example
        const mid1 = left + Math.floor((right - left)/2), mid2 = mid1 + 1;
        if(nums[mid1] < nums[mid2]){
            left = mid2;
        }else{
            right = mid1;
        }
    }
    return left;//since we use "left <= right", we could return right(when jump out of loop, left == right). 
};