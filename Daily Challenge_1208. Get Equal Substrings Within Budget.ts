function equalSubstring(s: string, t: string, maxCost: number): number {
    let left = 0, curDiff = 0, maxLen = 0, len = s.length;
    for(let right = 0; right < len; right++){
        curDiff += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));

        while(left < len && curDiff > maxCost){
            curDiff -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
};