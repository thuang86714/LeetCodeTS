function uniqueOccurrences(arr: number[]): boolean {
    //credit to sagarpednekar04
    const countTracker = new Map();
    for(const num of arr){
        countTracker.set(num, (countTracker.get(num) || 0) + 1);
    }
    return countTracker.size == new Set(countTracker.values()).size;
};