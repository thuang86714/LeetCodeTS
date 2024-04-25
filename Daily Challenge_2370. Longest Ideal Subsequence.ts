function longestIdealString(s: string, k: number): number {
    //TC O(n*k), SC O(1)
    let ans  = 0;
    let charMemoArray: number[] = new Array(26).fill(0);  // Initialize array with 26 zeros
    for(let i = 0; i < s.length; i++){
        let maxLen = 0;
        // Directly work with indices derived from character ranges
        let charIndex = s.charCodeAt(i) - 'a'.charCodeAt(0);
        let start = Math.max(0, charIndex - k);
        let end = Math.min(25, charIndex + k);

        for(let j = start; j <= end; j++){
            maxLen = Math.max(maxLen, charMemoArray[j] || 0);
        }

        charMemoArray[charIndex] = maxLen + 1;
        ans = Math.max(ans, charMemoArray[charIndex]);
    }
    return ans;
};