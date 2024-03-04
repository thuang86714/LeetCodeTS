function bagOfTokensScore(tokens: number[], power: number): number {
    //TC O(nlogn), SC O(1), greedy
    let [ans, score, left, right] = [0, 0, 0, tokens.length - 1];
    tokens.sort((n1, n2) => n1 - n2);
    while(left <= right){
        if(power >= tokens[left]){
            ans = Math.max(ans, ++score);
            power -= tokens[left++];
        }else if(score > 0){
            score--;
            power += tokens[right--];
        }else{
            break;
        }
    }
    return ans;
};