let ans: number[][];
function buildSubset(nums: number[], cur: number[], idx: number): void{
    ans.push([...cur]);
    
    if(idx == nums.length){
        return;
    }

    for(let i = idx; i < nums.length; i++){
        cur.push(nums[i]);
        buildSubset(nums, cur, i + 1);
        cur.pop();
    }
}
function subsets(nums: number[]): number[][] {
    ans = [];
    let cur: number[] = [];
    buildSubset(nums, cur, 0);
    return ans;
};