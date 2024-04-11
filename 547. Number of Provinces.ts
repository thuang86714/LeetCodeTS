function findAllConnected(isConnected: number[][], visitedArray: number[], idx: number): void{
    for(let j = 0; j < isConnected.length; j++){
        if(isConnected[idx][j] == 1 && visitedArray[j] == 0){
            visitedArray[j] = 1;
            findAllConnected(isConnected, visitedArray, j);
        }
    }
};
function findCircleNum(isConnected: number[][]): number {
    //credit to vindo23, TC O(n^2), SC O(n)
    let provinceCount = 0;
    let visitedArray = Array(isConnected.length).fill(0);
    for(let i = 0 ; i < isConnected.length; i++){
        if(visitedArray[i] == 0){
            visitedArray[i] = 1;
            findAllConnected(isConnected, visitedArray, i);
            provinceCount++;
        }
    }
    return provinceCount;
};