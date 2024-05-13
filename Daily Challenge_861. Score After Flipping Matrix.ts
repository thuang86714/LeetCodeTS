//the function's cognitive complexity is 33, which is way too high, 
//solution to this is coming up two extra function: iterateByRow and iterateByCol, both return int(rowSum and colSum)

function matrixScore(grid: number[][]): number {
    // TC O(m*n), SC O(1)
    // The key is to get as many 1s as we can
    // Iterate by row to see if this row needs to be flipped

    for (let i = 0; i < grid.length; i++) {
        let rowSum = 0;
        for (let j = 0; j < grid[0].length; j++) {
            // Every element in a row is weighted
            rowSum *= 2;
            if (grid[i][j] === 1) {
                rowSum += 1;
            } else {
                rowSum -= 1;
            }
        }
        // Early return
        if (rowSum >= 0) {
            continue;
        }
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                grid[i][j] = 0;
            } else {
                grid[i][j] = 1;
            }
        }
    }

    // Iterate by column to see if this row needs to be flipped
    for (let j = 0; j < grid[0].length; j++) {
        let colSum = 0;
        for (let i = 0; i < grid.length; i++) {
            if (grid[i][j] === 1) {
                colSum += 1;
            } else {
                colSum -= 1;
            }
        }
        // Early return
        if (colSum >= 0) {
            continue;
        }
        for (let i = 0; i < grid.length; i++) {
            if (grid[i][j] === 1) {
                grid[i][j] = 0;
            } else {
                grid[i][j] = 1;
            }
        }
    }

    let ans = 0;
    for (let i = 0; i < grid.length; i++) {
        let rowSum = 0;
        for (let j = 0; j < grid[0].length; j++) {
            rowSum *= 2;
            rowSum += grid[i][j];
        }
        ans += rowSum;
    }
    return ans;
}
