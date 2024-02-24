function largestAltitude(gain: number[]): number {
    let ans = 0;
    let cur = 0;
    for(let i = 0; i < gain.length; i++){
        cur += gain[i];
        ans = Math.max(ans, cur);
    }
    return ans;
};