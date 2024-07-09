function canConstruct(ransomNote: string, magazine: string): boolean {
    const stringCountMap: Map<string, number> = new Map();
    for (let idx = 0; idx < magazine.length; idx++) {
        stringCountMap.set(magazine[idx], (stringCountMap.get(magazine[idx]) || 0) + 1);
    }
    for (let idx = 0; idx < ransomNote.length; idx++) {
        stringCountMap.set(ransomNote[idx], (stringCountMap.get(ransomNote[idx]) || 0) - 1);
        if (stringCountMap.get(ransomNote[idx])! < 0) {
            return false;
        }
    }
    return true;
};