function lengthOfLongestSubstring(s: string): number {
    //TC O(n), SC O(1)
    const charCountMap: Map<string, number> = new Map();
    let left = 0, ans = 0;
    for (let right = 0; right < s.length; right++) {
        charCountMap.set(s[right], (charCountMap.get(s[right]) || 0) + 1);

        while (left < right && charCountMap.get(s[right])! > 1) {
            charCountMap.set(s[left], charCountMap.get(s[left])! - 1);
            left++;
        }

        ans = Math.max(ans, right - left + 1);
    }
    return ans;
};