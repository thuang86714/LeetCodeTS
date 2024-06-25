function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    let totalSatisfied = 0;
    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 0) {
            totalSatisfied += customers[i];
        }
    }

    let curIncrease = 0, maxIncrease = 0;
    for (let i = 0; i < minutes; i++) {
        if (grumpy[i] === 1) {
            curIncrease += customers[i];
        }
    }
    maxIncrease = curIncrease;

    for (let i = minutes; i < customers.length; i++) {
        if (grumpy[i] === 1) {
            curIncrease += customers[i];
        }
        if (grumpy[i - minutes] === 1) {
            curIncrease -= customers[i - minutes];
        }
        maxIncrease = Math.max(maxIncrease, curIncrease);
    }

    return totalSatisfied + maxIncrease;
};