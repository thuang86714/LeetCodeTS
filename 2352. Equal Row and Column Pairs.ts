type Grid = number[][];

function equalPairs(grid: Grid): number {
  const gridSize = grid.length;
  const transposedGrid: Grid = new Array(gridSize).fill(null).map(() => new Array(gridSize).fill(0));

  // Transpose the grid
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      transposedGrid[col][row] = grid[row][col];
    }
  }

  let equalPairsCount = 0;
  // Compare each row with each column
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      if (areArraysEqual(grid[row], transposedGrid[col])) {
        equalPairsCount++;
      }
    }
  }

  return equalPairsCount;
}

// Helper function to check if two arrays are equal
function areArraysEqual(arr1: number[], arr2: number[]): boolean {
  return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
}