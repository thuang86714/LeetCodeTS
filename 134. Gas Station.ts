function canCompleteCircuit(gas: number[], cost: number[]): number {
    //TC O(n), SC O(1)
    let [gasSum, costSum, diff, index] = [0, 0, 0, 0];
    for(let i = 0; i < gas.length; i++){
        gasSum += gas[i];
        costSum += cost[i];
        diff += gas[i] - cost[i];

        if(diff < 0){
            diff = 0;
            index = i + 1;
        }
    }
    if(gasSum < costSum){
        return -1;
    }
    return index;
};