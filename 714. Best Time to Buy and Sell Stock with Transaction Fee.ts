function maxProfit(prices: number[], fee: number): number {
    const n: number = prices.length;
    /*
    .fill(null) initializes all elements of this array with null 
    (this step is necessary because the array needs to have actual "slots" filled to be able to map over them;
     uninitialized slots are not included in .map() iterations).
    .map(() => Array(2).fill(0)) replaces each null with a new array of 2 integers, each initialized to 0.
    */
    const memo: number[][] = Array(n).fill(null).map(() => Array(2).fill(0));

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            memo[i][0] = 0;
            memo[i][1] = -prices[i] - fee;
            continue;
        }
        memo[i][0] = Math.max(memo[i - 1][0], memo[i - 1][1] + prices[i]);
        memo[i][1] = Math.max(memo[i - 1][1], memo[i - 1][0] - prices[i] - fee);
    }
    return memo[n - 1][0];
};