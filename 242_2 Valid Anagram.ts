function isAnagram(s: string, t: string): boolean {
    const stringCountMap: Map<string, number> = new Map();
    for(let idx = 0; idx < s.length; idx++){
        stringCountMap.set(s[idx], (stringCountMap.get(s[idx]) || 0) + 1);
    }

    for(let idx = 0; idx < t.length; idx++){
        stringCountMap.set(t[idx], stringCountMap.get(t[idx])! - 1);
    }

    for(const val of stringCountMap.values()){
        if( val !== 0){
            return false;
        }
    }
    return true;
};