const dirs: number[][] = [[1, 0], [-1, 0], [0, 1], [0, -1]];
function isValid(newX: number, newY: number, grid: number[][]): boolean{
    if(newX < 0 || newX >= grid.length || newY < 0 || newY >= grid[0].length){
        return false;
    }
    return grid[newX][newY] > 0;
}
function collectGold(x: number, y: number, grid: number[][]): number{
    const curGold = grid[x][y];
    let maxNextStep = 0;
    grid[x][y] = 0;
    for(let i = 0; i < dirs.length; i++){
        let newX = x + dirs[i][0];
        let newY = y + dirs[i][1];
        if(isValid(newX, newY, grid)){
            maxNextStep = Math.max(maxNextStep, collectGold(newX, newY, grid));
        }
    }
    grid[x][y] = curGold;
    return curGold + maxNextStep;
}
function getMaximumGold(grid: number[][]): number {
    /*
    Time: O(k * 3 ^ k), where k is the number of cells with gold. We perform the analysis for k cells, and from each cell we can go in three directions.
    Memory: O(k) for the recursion.
    */
    let ans = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] > 0){
                ans = Math.max(ans, collectGold(i, j, grid));
            }
        }
    }
    return ans;
};