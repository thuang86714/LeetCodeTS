function longestPalindrome(s: string): number {
    //TC O(n), SC O(1)
    let length = 0;
    let hasOddCount = false;
    let charCountMap: Map<string, number> = new Map();
    // Count the occurrences of each character
    for (const char of s) {
        charCountMap[char] = (charCountMap[char] || 0) + 1;
    }

    for (const count of Object.values(charCountMap)) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1;
            hasOddCount = true;
        }
    }

    if(hasOddCount){
        length += 1;
    }
    return length;
};