function intersection(nums1: number[], nums2: number[]): number[] {
    //TC O(m+n), SC O(m+n)
    // Use a Set for O(1) lookups and to track elements in nums1
    const seen = new Set(nums1);

    // Use a Set to ensure uniqueness in the result
    const unique = new Set<number>();
    for (const num of nums2) {
        if (seen.has(num)) {
            unique.add(num);
        }
    }

    // Convert the Set to an array for the result
    return Array.from(unique);
}