function countBits(n: number): number[] {
    //credit to fengcc, TC O(n), SC O(1)
    const ans = new Array(n + 1).fill(0);
    for(let i = 1; i <= n; i++){
        ans[i] = ans[i &(i - 1)] + 1;
    }
    return ans;
};