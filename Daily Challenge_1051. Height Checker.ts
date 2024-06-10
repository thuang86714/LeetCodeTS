function heightChecker(heights: number[]): number {
    //TC O(nlogn), SC O(n)
    const expected = [...heights].sort((a, b)=>a - b);
    let count = 0;
    heights.forEach((height, index)=>{
        if(height !== expected[index]){
            count++;
        }
    });
    return count++;
};