function maxFrequencyElements(nums: number[]): number {
    //TC O(n), SC O(1)
    const countArray: number[] = new Array(101).fill(0);
    for(const num of nums){
        countArray[num]++;
    }
    const maxCount: number = Math.max(...countArray);
    console.log(maxCount);
    let res = 0;
    for(const count of countArray){
        if(count === maxCount){
            res += maxCount;
        }
    }
    return res;
};