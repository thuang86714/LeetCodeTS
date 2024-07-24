function luckyNumbers(matrix: number[][]): number[] {
    //TC O(m*n), SC O(m + n)
    const m = matrix.length, n = matrix[0].length;
    const maxCol: number[] = matrix[0];
    const minRow: number[] = new Array(n);
    const result: number[] = [];


    for (let i = 0; i < m; i++) {
        let curMin = 1000000;
        for (let j = 0; j < n; j++) {
            maxCol[j] = Math.max(maxCol[j], matrix[i][j]);
            curMin = Math.min(curMin, matrix[i][j]);
        }
        minRow[i] = curMin;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (maxCol[j] === minRow[i]) {
                result.push(maxCol[j]);
            }
        }
    }
    return result;
};