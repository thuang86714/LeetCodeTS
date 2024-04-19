const dirs: number[][] = [[1,0], [0, 1], [-1, 0], [0, -1]];
function findThisIsland(x: number, y : number, grid: string[][]){
    //dfs, TC O(m*n), SC O(m*n)
    if(grid[x][y] == "0"){
        return;
    }
    grid[x][y] = "0";

    for(let dir of dirs){
        let newX = x + dir[0];
        let newY = y + dir[1];
        if(newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length){
            findThisIsland(newX, newY, grid);
        }
    }
}
function numIslands(grid: string[][]): number {
    let islandCount = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] == "1"){
                islandCount++;
                findThisIsland(i, j, grid);
            }
        }
    }
    return islandCount;
};

/*
const dirs: number[][] = [[1,0], [0, 1], [-1, 0], [0, -1]];
type Pair = {
    X: number;
    Y: number;
};
function findThisIsland(x: number, y : number, grid: string[][]){
    //bfs, TC O(m*n), SC O(m*n)
    let toVisitArray: Pair[] = [];
    toVisitArray.push({X: x, Y: y});

    while(toVisitArray.length != 0){
        let cur = toVisitArray.shift();
        let curX = cur.X;
        let curY = cur.Y;
        for(let dir of dirs){
            let newX = curX + dir[0];
            let newY = curY + dir[1];
            if(newX >= 0 && newX < grid.length && newY >= 0 && grid[0].length && grid[newX][newY] === "1"){
                toVisitArray.push({X: newX, Y: newY});
                grid[newX][newY] = "0";
            }
        }
    }
}
function numIslands(grid: string[][]): number {
    let islandCount = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] == "1"){
                islandCount++;
                findThisIsland(i, j, grid);
            }
        }
    }
    return islandCount;
};
*/