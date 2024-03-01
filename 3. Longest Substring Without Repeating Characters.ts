function lengthOfLongestSubstring(s: string): number {
    //TC O(n^2), SC O(1)
    const dict: boolean[] = Array(128).fill(false);
    let length: number = 0;
    let ans: number = 0;

    for (let i = 0, j = 0; i < s.length; i++) {
        const index: number = s.charCodeAt(i);
        
        if (dict[index]) {
            while (dict[index]) {
                length--;
                dict[s.charCodeAt(j)] = false;
                j++;
            }
        }

        dict[index] = true;
        length++;
        ans = Math.max(ans, length);
    }
    
    return ans;
}