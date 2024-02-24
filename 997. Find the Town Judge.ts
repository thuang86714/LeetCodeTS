function findJudge(n: number, trust: number[][]): number {
    //credit to alexgavrilov, TC O(n), SC O(n)
    const scoreCount = Array(n + 1).fill(0);
    for(let [a, b] of trust){
        scoreCount[a]--;
        scoreCount[b]++;
    }
    for(let i = 1; i <= n; i++){
        if(scoreCount[i] == n - 1){
            return i;
        }
    }
    return -1;
};