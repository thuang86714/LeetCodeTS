function uniquePaths(m: number, n: number): number {
    const memoArray = new Array(n).fill(1);
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            memoArray[j] += memoArray[j - 1];
        }
    }
    return memoArray[n - 1];
};