function findRelativeRanks(score: number[]): string[] {
    //TC O(nlogn), SC O(n)
    const indexedScoreArray = score.map((score, index) => ({ score, index }));
    indexedScoreArray.sort((a, b) => b.score - a.score);

    const ans: string[] = new Array(score.length);
    indexedScoreArray.forEach((item, rank) =>{
        switch(rank){
            case 0:
                ans[item.index] = "Gold Medal";
                break;
            case 1:
                ans[item.index] = "Silver Medal";
                break;
            case 2:
                ans[item.index] = "Bronze Medal";
                break;
            default:
                ans[item.index] = String(rank + 1);
        }
    });
    return ans;
};