function summaryRanges(nums: number[]): string[] {
    if(nums.length == 0){
        return [];
    }

    const res: string[] = [];
    let curFront = nums[0], curBack = nums[0];
    for(let num of nums){
        if(curBack + 1 < num){
            if(curFront == curBack){
                res.push(`${curFront}`);
            }else{
                res.push(`${curFront}->${curBack}`);
            }
            curFront = num;
        }
        curBack = num;
    }
    
    if(curFront == curBack){
        res.push(`${curFront}`);
    }else{
        res.push(`${curFront}->${curBack}`);
    }
    return res;
};