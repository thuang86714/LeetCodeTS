function maxOperations(nums: number[], k: number): number {
    //TC O(n), SC O(n)
    const dict = new Map<number, number>();
    for(let num of nums){
        dict[num] = (dict[num] || 0) + 1;
    }
    let ans = 0;
    for(let num of nums){
        if(dict[num]){
            dict[num]--
            if(dict[k - num]){
                ans++;
                dict[k - num]--;
            }else{
                dict[num]++;
            }
        }
    }
    return ans;
};