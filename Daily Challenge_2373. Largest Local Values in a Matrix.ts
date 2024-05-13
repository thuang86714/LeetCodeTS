function largestLocal(grid: number[][]): number[][] {
    //TC O(n^2), SC O(1)
    const n = grid.length;
    let result: number[][] = Array(n - 2).fill(0).map(() => Array(n - 2).fill(0));
    for(let i = 0; i < n - 2; i++){
      for(let j = 0; j < n - 2; j++){
          for(let I = i; I < i + 3; I++){
              for(let J = j; J < j + 3; J++){
                  result[i][j] = Math.max(result[i][j], grid[I][J]);
              }
          }
      }
    }
    return result;
  };