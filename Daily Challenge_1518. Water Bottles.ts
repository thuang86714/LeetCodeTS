function numWaterBottles(numBottles: number, numExchange: number): number {
    let ans = 0, residualBottle = 0;
    while (numBottles > 0) {
        ans += numBottles;
        let curBottle = numBottles + residualBottle;
        residualBottle = curBottle % numExchange;
        numBottles = Math.floor(curBottle / numExchange);
    }
    return ans;
};