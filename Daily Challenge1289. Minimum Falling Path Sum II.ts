function minFallingPathSum(grid: number[][]): number {
    //credit to votrubac, TC O(n^2), SC O(1)
    /*
    credit to taserface:
    If firstMinCur of two rows share the same column, 
    then take 
    min(firstMinCur + secondMinNext, secondMinCur + firstMinNext)
    */
    let firstMinCur = 0, secondMinCur = 0, posCur = -1, len = grid.length;
    for(let i = 0; i < len; i++){
        let firstMinNext = Number.MAX_SAFE_INTEGER, secondMinNext = Number.MAX_SAFE_INTEGER, posNext = -1;
        for(let j = 0; j < len; j++){
            let curMemo: number;
            if(j == posCur){
                curMemo = secondMinCur;
            }else{
                curMemo = firstMinCur;
            }
            if(grid[i][j] + curMemo < firstMinNext){
                secondMinNext = firstMinNext;
                firstMinNext = grid[i][j] + curMemo;
                posNext = j;
            }else{
                secondMinNext = Math.min(secondMinNext, grid[i][j] + curMemo);
            }
        }
        firstMinCur = firstMinNext, secondMinCur = secondMinNext, posCur = posNext;
    }
    return firstMinCur;
};