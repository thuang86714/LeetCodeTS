function atMostK(A: number[], K: number): number {
    let i = 0, res = 0;
    const count: Record<number, number> = {};
    for (let j = 0; j < A.length; ++j) {
        if (!count[A[j]]) count[A[j]] = 0;
        if (!count[A[j]]++) K--;
        while (K < 0) {
            if (!--count[A[i]]) K++;
            i++;
        }
        res += j - i + 1;
    }
    return res;
};
function subarraysWithKDistinct(nums: number[], k: number): number {
    return atMostK(nums, k) - atMostK(nums, k - 1);
};