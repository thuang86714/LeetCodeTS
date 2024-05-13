function maximumHappinessSum(happiness: number[], k: number): number {
    //TC O(nlogn), SC O(1)
    let ans = 0, childCount = 0, idx = happiness.length - 1;
    happiness.sort((a, b) => a - b);
    while(k > 0 && idx >= 0){
        if(happiness[idx] - childCount >= 0){
            ans += happiness[idx] - childCount;
        }else{//meaning that we've reached the element that woudl give us max(given k)
            break;
        }
        idx--;
        childCount++;
        k--;
    }
    return ans;
};