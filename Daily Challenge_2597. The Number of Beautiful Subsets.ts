function beautifulSubsets(A: number[], k: number): number {
    // Initialize count array with k empty Maps
    const count: Map<number, number>[] = Array.from({ length: k }, () => new Map<number, number>());

    // Count occurrences of each element in A, grouped by modulo k
    for (const a of A) {
        const mod = a % k;
        if (!count[mod].has(a)) {
            count[mod].set(a, 0);
        }
        count[mod].set(a, (count[mod].get(a) || 0) + 1);
    }

    let res = 1;

    // Process each group of elements with the same modulo k value
    for (let i = 0; i < k; i++) {
        let prev = 0, dp0 = 1, dp1 = 0;
        const keys = Array.from(count[i].keys()).sort((a, b) => a - b);

        // Iterate through the sorted keys
        for (const a of keys) {
            const v = Math.pow(2, count[i].get(a) || 0);  // Calculate power of 2 for the count of the current element
            
            if (prev + k === a) {
                [dp0, dp1] = [dp0 + dp1, dp0 * (v - 1)];
            } else {
                [dp0, dp1] = [dp0 + dp1, (dp0 + dp1) * (v - 1)];
            }
            prev = a;
        }
        res *= dp0 + dp1;
    }
    return res - 1;
}