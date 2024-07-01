function threeConsecutiveOdds(arr: number[]): boolean {
    let curLen = 0;
    for (let idx = 0; idx < arr.length; idx++) {
        if (arr[idx] % 2 === 0) {
            curLen = 0;
            continue;
        }
        curLen++;
        if (curLen === 3) {
            return true;
        }
    }
    return false;
};