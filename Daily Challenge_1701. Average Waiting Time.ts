function averageWaitingTime(customers: number[][]): number {
    let startingTime = 0, lastFinishTime = customers[0][0], customerCount = customers.length, timeSum = 0;
    for (let order of customers) {
        startingTime = Math.max(lastFinishTime, order[0]);
        timeSum += startingTime + order[1] - order[0];
        lastFinishTime = startingTime + order[1];
    }
    return timeSum / customerCount;
};