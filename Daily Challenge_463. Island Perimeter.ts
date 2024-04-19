function islandPerimeter(grid: number[][]): number {
    //credit to lamXiaoBai, TC O(m*n), SC O(1)
    let cellCount = 0, repeat = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 0){
                continue;
            }
            cellCount++;
            if(i > 0 && grid[i - 1][j] === 1){
                repeat++;
            }
            if(j > 0 && grid[i][j - 1] === 1){
                repeat++;
            }
        }
    }
    return 4 * cellCount - 2 * repeat;
};