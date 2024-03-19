function findMinArrowShots(points: number[][]): number {
    //TC O(nlogn), SC O(1)
    let arrow = 1;
    points.sort((a, b) => a[0] - b[0]);
    let arrowAt = points[0][1];
    for(let i = 1; i < points.length; i++){
        if(arrowAt < points[i][0]){
            arrowAt = points[i][1];
            arrow++;
        }else{
            arrowAt = Math.min(arrowAt, points[i][1]);
        }
    }
    return arrow;
};