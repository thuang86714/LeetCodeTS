function intersect(nums1: number[], nums2: number[]): number[] {
    if(nums2.length > nums1.length){
        return intersect(nums2, nums1);
    }
    // TC O(n + m), SC O(min(m, n))
    const numCountMap: Map<number, number> = new Map();
    for (let num of nums1) {
        numCountMap.set(num, (numCountMap.get(num) || 0) + 1);
    }

    const ansArray: number[] = [];
    for (let num of nums2) {
        if (numCountMap.get(num)! > 0) {
            ansArray.push(num);
            numCountMap.set(num, numCountMap.get(num)! - 1);
        }
    }
    return ansArray;
};