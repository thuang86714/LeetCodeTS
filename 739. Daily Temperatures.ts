function dailyTemperatures(temperatures: number[]): number[] {
    //credit to riemeltm, TC O(n), SC O(n)
    const n = temperatures.length;
    let result = Array(n).fill(0);
    let indexArray: number[] = [];
    for(let idx = n - 1; idx >= 0; idx--){
        // Pop elements from indexSlice while the current temperature is greater or equal to
        // the temperature at the index on top of the indexSlice stack
        while(indexArray.length > 0 && temperatures[indexArray[indexArray.length - 1]] <= temperatures[idx]){
            indexArray.pop();
        }

        // If indexSlice is not empty, calculate the days until a warmer temperature
        if(indexArray.length > 0){
            result[idx] = indexArray[indexArray.length - 1] - idx;
        }

        // Push the current index onto indexSlice
        indexArray.push(idx);
    }
    return result;
};