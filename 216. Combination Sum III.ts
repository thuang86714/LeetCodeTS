function combinationSum3(k: number, n: number): number[][] {
    const result: number[][] = [];
    
    const findCombo = (k: number, n: number, curNum: number, curSum: number, curCombo: number[]) => {
        if (curCombo.length === k) {
            if (curSum === n) {
                result.push([...curCombo]); // Make a copy of curCombo
                return;
            }
        }

        for (let i = curNum; i <= 9; i++) {
            // Pass a new array with the current number appended for the next recursion level
            findCombo(k, n, i + 1, curSum + i, [...curCombo, i]);
        }
    };

    findCombo(k, n, 1, 0, []);
    return result;
}
