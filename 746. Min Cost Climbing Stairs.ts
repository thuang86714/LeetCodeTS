function minCostClimbingStairs(cost: number[]): number {
    if(cost.length < 3){
        return Math.min(...cost);
    }
    let cur = 0
    let oneStep = cost[1]
    let twoStep = cost[0]
    for(let i = 2; i < cost.length; i++){
        cur = Math.min(oneStep, twoStep) + cost[i];
        twoStep = oneStep;
        oneStep = cur;
    }
    return Math.min(oneStep, twoStep);
};

function minCostClimbingStairs(cost: number[]): number {
    cost.push(0);
            for (let i = cost.length - 3; i >= 0; i--) {
                cost[i] += Math.min(cost[i + 1], cost[i + 2]);
            }
            return Math.min(cost[0], cost[1]);
};