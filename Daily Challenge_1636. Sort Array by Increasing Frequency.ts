type NumFreqPair = {
    num: number;
    freq: number;
};

function frequencySort(nums: number[]): number[] {
    const numFreqMap: Map<number, number> = new Map();
    const numFreqPairArray: NumFreqPair[] = [];

    for (const num of nums) {
        numFreqMap.set(num, (numFreqMap.get(num) || 0) + 1);
    }

    for (const [num, freq] of numFreqMap) {
        numFreqPairArray.push({ num, freq });
    }

    numFreqPairArray.sort((a, b) => {
        if (a.freq !== b.freq) {
            return a.freq - b.freq;
        } else {
            return b.num - a.num;
        }
    });

    const result: number[] = [];
    for (const pair of numFreqPairArray) {
        for (let i = 0; i < pair.freq; i++) {
            result.push(pair.num);
        }
    }

    return result;
}