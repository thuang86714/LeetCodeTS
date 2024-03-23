function increasingTriplet(nums: number[]): boolean {
    let nums1 = Number.MAX_SAFE_INTEGER, nums2 = Number.MAX_SAFE_INTEGER;
    for(let n of nums){
        if(n <= nums1){
            nums1 = n;
        }else if(n <= nums2){
            nums2 = n;
        }else{
            return true;
        }
    }
    return false;
};