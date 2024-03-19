function maxVowels(s: string, k: number): number {
    //TC O(n), SC O(1)
    const charMap = new Set<string>([
        'a', 'e', 'i', 'o', 'u'
    ]);
    let left = 0, right = 0, curCount = 0, maxCount = 0;
    while(left < s.length && right < s.length){
        while(right < s.length && right - left + 1 <= k){//sliding window with fixed size k
            if(charMap.has(s[right])){
                curCount++;
            }
            right++;
        }
        maxCount = Math.max(maxCount, curCount);
        if(charMap.has(s[left])){
            curCount--;
        }
        left++;
    }
    return maxCount;
};