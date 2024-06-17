function lengthOfLongestSubstring(s: string): number {
    //TC O(s.length), SC O(s.length)
    const charCountMap: Map<string, number> = new Map();
    let left = 0, right = 0, maxLen = 0;
    for(;right < s.length; right++){
        // Get the current count of the character at the 'right' pointer, defaulting to 0 if not found
        const currentCount = charCountMap.get(s[right]) || 0;

        // Increment the count and update the map
        charCountMap.set(s[right], currentCount + 1);

        while(charCountMap.get(s[right])! > 1){
            charCountMap.set(s[left], charCountMap.get(s[left])! - 1);
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    } 
    return maxLen;
};