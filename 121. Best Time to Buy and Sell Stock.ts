function maxProfit(prices: number[]): number {
    let curMin = 10001, curProfit = 0;
    for(let price of prices){
        curMin = Math.min(curMin, price);
        curProfit = Math.max(curProfit, price - curMin);
    }
    return curProfit;
};