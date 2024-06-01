function scoreOfString(s: string): number {
    //TC O(n), SC O(1)
    let score = 0;
    for(let i = 1; i < s.length; i++){
        score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
    }
    return score;
};