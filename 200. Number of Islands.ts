const dirs: number[][] = [[1, 0], [0, 1], [-1, 0], [0, -1]];
function findIslandDFS(x: number, y: number, grid: string[][]){
    grid[x][y] = "0";
    for(let dir of dirs){
        let newX = x + dir[0];
        let newY = y + dir[1];
        if(newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length && grid[newX][newY] === "1"){
            findIslandDFS(newX, newY, grid);
        }
    }
}
function numIslands(grid: string[][]): number {
    let islandCount = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === "1"){
                islandCount++;
                findIslandDFS(i, j, grid);
            }
        }
    }
    return islandCount;
};