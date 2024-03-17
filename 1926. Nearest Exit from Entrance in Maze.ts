function nearestExit(maze: string[][], entrance: number[]): number {
    const dirs: number[][] = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const m: number = maze.length;
    const n: number = maze[0].length;
    let ans: number = 0;
    const toVisit: Array<[number, number]> = [[entrance[0], entrance[1]]];
    maze[entrance[0]][entrance[1]] = '+';

    while (toVisit.length > 0) {
        let curSize: number = toVisit.length;
        for (let i = 0; i < curSize; i++) {
            const [row, col] = toVisit.shift()!;
            if ((row === 0 || col === 0 || row === m - 1 || col === n - 1) && !(row === entrance[0] && col === entrance[1])) {
                // Check if we are on the border but not at the entrance
                return ans;
            }
            for (const [dRow, dCol] of dirs) {
                const newRow: number = row + dRow;
                const newCol: number = col + dCol;
                if (newRow >= 0 && newCol >= 0 && newRow < m && newCol < n && maze[newRow][newCol] === '.') {
                    toVisit.push([newRow, newCol]);
                    maze[newRow][newCol] = '+';
                }
            }
        }
        ans++;
    }
    return -1;
};