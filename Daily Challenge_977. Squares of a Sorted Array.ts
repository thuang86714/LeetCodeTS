function sortedSquares(nums: number[]): number[] {
    //TC O(nlogn), SC O(1)
    let ans: number[]= [];
    for(let num of nums){
        ans.push(num*num);
    }
    ans.sort((n1, n2) => n1- n2);
    return ans;
};

function sortedSquares(nums: number[]): number[] {
    //can we do TC O(n)-->yes, credit to andnik and yuluairoy
    let [idx, left, right] = [nums.length - 1, 0, nums.length - 1];
    const ans = new Array(nums.length).fill(0);
    for(; idx >= 0; idx--){
        if(Math.abs(nums[left]) > Math.abs(nums[right])){
            ans[idx] = nums[left] *nums[left++];
        }else{
            ans[idx] = nums[right] *nums[right--];
        }
    }
    return ans;
};