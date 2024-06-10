function appendCharacters(s: string, t: string): number {
    //TC O(n), SC O(1)
    let sIdx = 0, tIdx = 0;
    while(sIdx < s.length && tIdx < t.length){
        if(s[sIdx] == t[tIdx]){
            tIdx++;
        }
        sIdx++;
    }
    return t.length - tIdx;
};