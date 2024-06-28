function numTilings(n: number): number {
    // credit to archit91, Dynamic Programming - Tabulation, TC O(n), SC O(n)
    const MOD = 1000000007;
    const memoArray: number[][] = Array(1001);
    for (let i = 0; i < 1001; i++) {
        memoArray[i] = Array(2);
    }
    memoArray[1] = [1, 1];
    memoArray[2] = [2, 2];

    for (let i = 3; i <= n; i++) {
        memoArray[i][0] = (memoArray[i - 1][0] + memoArray[i - 2][0] + 2 * memoArray[i - 2][1]) % MOD;
        memoArray[i][1] = (memoArray[i - 1][0] + memoArray[i - 1][1]) % MOD;
    }
    return memoArray[n][0];
};