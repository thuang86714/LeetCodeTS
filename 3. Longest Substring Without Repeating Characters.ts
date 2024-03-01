function lengthOfLongestSubstring(s: string): number {
    //TC O(n^2), SC O(1)
    const dict: boolean[] = Array(128).fill(false);
    let length = 0;
    let ans = 0;

    for (let i = 0, j = 0; i < s.length; i++) {
        const index = s.charCodeAt(i);
        
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