type numIdxCombo = {
    oldNum: number;
    newNum: number;
    idx: number;
};

function sortJumbled(mapping: number[], nums: number[]): number[] {
    let numIdxSlice: numIdxCombo[] = [];
    for (let curIdx = 0; curIdx < nums.length; curIdx++) {
        let num = nums[curIdx];
        let cur = num, next = 0, digit = 1;
        if (cur === 0) {
            numIdxSlice.push({
                oldNum: num,
                newNum: mapping[0],
                idx: curIdx,
            });
            continue;
        }

        while (cur > 0) {
            next = mapping[cur % 10] * digit + next;
            cur = Math.floor(cur / 10);
            digit *= 10;
        }
        numIdxSlice.push({
            oldNum: num,
            newNum: next,
            idx: curIdx,
        });
    }
    numIdxSlice.sort((a, b) => {
        if (a.newNum === b.newNum) {
            return a.idx - b.idx;
        }
        return a.newNum - b.newNum;
    });

    let result: number[] = [];
    for (const combo of numIdxSlice) {
        result.push(combo.oldNum);
    }

    return result;
}