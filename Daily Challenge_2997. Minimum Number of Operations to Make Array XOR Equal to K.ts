function minOperations(nums: number[], k: number): number {
    nums.forEach(num => {
        k ^= num;
    });
    return countSetBits(k);
}

function countSetBits(x: number): number {
    let count = 0;
    while (x > 0) {
        count += x & 1;
        x >>= 1;
    }
    return count;
}