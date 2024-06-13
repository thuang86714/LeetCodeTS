let ans: number[][] = [];
function findCombo(candidates: number[], target: number, curSum: number, curCombo: number[], idx: number){
    //both TC SC areO(2^n*k), where k is avg len of all combo, 
    if(curSum > target){
        return;
    }
    if(curSum == target){
        ans.push([...curCombo]);
    }

    for(let i = idx; i < candidates.length; i++){
        curSum += candidates[i];
        curCombo.push(candidates[i]);
        findCombo(candidates, target, curSum, curCombo, i);
        curSum -= candidates[i];
        curCombo.pop();
    }
}
function combinationSum(candidates: number[], target: number): number[][] {
    ans = [];
    let curSum = 0;
    let curCombo: number[] = []; 
    findCombo(candidates, target, curSum, curCombo, 0);
    return ans;
};