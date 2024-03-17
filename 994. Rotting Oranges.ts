function orangesRotting(grid: number[][]): number {
    const dirs: number[][] = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const m: number = grid.length;
    const n: number = grid[0].length;
    let freshOrange: number = 0;
    let ans: number = -1;
    const toVisit: Array<[number, number]> = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                freshOrange++;
            } else if (grid[i][j] === 2) {
                toVisit.push([i, j]);
            }
        }
    }

    while (toVisit.length > 0) {
        const curSize: number = toVisit.length;
        for (let i = 0; i < curSize; i++) {
            const [row, col] = toVisit.shift()!;
            for (const [dRow, dCol] of  dirs) {
                const newRow: number = row + dRow;
                const newCol: number = col + dCol;
                if (newRow >= 0 && newCol >= 0 && newRow < m && newCol < n && grid[newRow][newCol] === 1) {
                    grid[newRow][newCol] = 2;
                    toVisit.push([newRow, newCol]);
                    freshOrange--;
                }
            }
        }
        ans++;
    }

    if (freshOrange > 0) {
        return -1;
    }
    return ans === -1 ? 0 : ans;
    
};