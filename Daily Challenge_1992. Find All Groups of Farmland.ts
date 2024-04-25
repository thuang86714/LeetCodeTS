function findThisFarmland(x: number, y: number, land: number[][], curCoordinates: number[], ans: number[][]): void {
    land[x][y] = 0;  // Mark the cell as visited by setting it to 0

    for (const dir of dirs) {
        const newX = x + dir[0];
        const newY = y + dir[1];
        if (newX >= 0 && newX < land.length && newY >= 0 && newY < land[0].length && land[newX][newY] === 1) {
            if (newX > curCoordinates[2]) {
                curCoordinates[2] = newX;  // Update the farmland's maximum X boundary
            }
            if (newY > curCoordinates[3]) {
                curCoordinates[3] = newY;  // Update the farmland's maximum Y boundary
            }
            findThisFarmland(newX, newY, land, curCoordinates, ans);
        }
    }

    // Append current farmland boundaries if this is the root call for a new farmland
    if (x === curCoordinates[0] && y === curCoordinates[1]) {
        ans.push([...curCoordinates]);  // Use spread to push a copy of curCoordinates
    }
}

function findFarmland(land: number[][]): number[][] {
    const ans: number[][] = [];
    for (let i = 0; i < land.length; i++) {
        for (let j = 0; j < land[0].length; j++) {
            if (land[i][j] === 1) {
                const temp: number[] = [i, j, i, j];
                findThisFarmland(i, j, land, temp, ans);
            }
        }
    }
    return ans;
}
