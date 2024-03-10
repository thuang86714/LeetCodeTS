function getCommon(nums1: number[], nums2: number[]): number {
    //TC O(n), SC O(1)
    let idx1 = 0, idx2 = 0;
    while(idx1 < nums1.length && idx2 < nums2.length){
        if(nums1[idx1] == nums2[idx2]){
            return nums2[idx2];
        }else if(nums1[idx1] > nums2[idx2]){
            idx2++;
        }else{
            idx1++;
        }
    }
    return -1;
};