function merge(nums1: number[], nums2: number[]): number[] {
    const result: number[] = [];
    let idx1 = 0, idx2 = 0;

    while (idx1 < nums1.length && idx2 < nums2.length) {
        if (nums1[idx1] > nums2[idx2]) {
            result.push(nums2[idx2]);
            idx2++;
        } else {
            result.push(nums1[idx1]);
            idx1++;
        }
    }

    while (idx1 < nums1.length) {
        result.push(nums1[idx1]);
        idx1++;
    }

    while (idx2 < nums2.length) {
        result.push(nums2[idx2]);
        idx2++;
    }

    return result;
};
function mergeSort(nums: number[]): number[] {
    if (nums.length === 1) {
        return nums;
    }

    const mid = Math.floor(nums.length / 2);
    const nums1 = nums.slice(0, mid);
    const nums2 = nums.slice(mid);

    const nums1Sorted = mergeSort(nums1);
    const nums2Sorted = mergeSort(nums2);

    return merge(nums1Sorted, nums2Sorted);
};
function sortArray(nums: number[]): number[] {
    return mergeSort(nums);
};