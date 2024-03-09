function spiralOrder(matrix: number[][]): number[] {
    //TC O(m*n), SC O(1)
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
    let res = [];
    while(left <= right && top <= bottom){
        for(let j = left; j <= right && top <= bottom; j++){
            res.push(matrix[top][j]);
        }
        top++;

        for(let i = top; i <= bottom && left <= right; i++){
            res.push(matrix[i][right]);
        }
        right--;

        for(let j = right; left <= j && top <= bottom; j--){
            res.push(matrix[bottom][j]);
        }
        bottom--;

        for(let i = bottom; top <= i && left <= right; i--){
            res.push(matrix[i][left]);
        }
        left++;
    }
    return res;
};