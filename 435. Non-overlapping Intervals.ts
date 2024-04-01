function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0, curBack = intervals[0][1];
    for(let i = 1; i < intervals.length; i++){
        if(curBack > intervals[i][0]){
            count++;
        }else{
            curBack = intervals[i][1];
        }
    }

    return count;
};