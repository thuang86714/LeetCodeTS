function minDistance(word1: string, word2: string): number {
    //credit to jianchao-li, TC O(m*n), SC O(m*n)
    const memoArray: number[][] = [];
    const m = word1.length, n = word2.length;
    for (let i = 0; i <= m; i++) {
        memoArray[i] = new Array(n + 1).fill(0);
    }

    for (let i = 1; i <= m; i++) {
        memoArray[i][0] = i;
    }

    for (let j = 1; j <= n; j++) {
        memoArray[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                memoArray[i][j] = memoArray[i - 1][j - 1];
            } else {
                memoArray[i][j] = 1 + Math.min(memoArray[i - 1][j - 1],
                    Math.min(memoArray[i][j - 1], memoArray[i - 1][j]));
            }
        }
    }
    return memoArray[m][n];
};