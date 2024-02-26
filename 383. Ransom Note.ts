function canConstruct(ransomNote: string, magazine: string): boolean {
    let charMap = new Map<string, number>()
    for (let i = 0; i < magazine.length; i++){
        charMap[magazine[i]] = (charMap[magazine[i]] || 0) + 1
    }
    for (let i = 0; i < ransomNote.length; i++){
        if(!charMap[ransomNote[i]]){
            return false;
        }
        charMap[ransomNote[i]] = (charMap[ransomNote[i]] || 0) - 1
    }
    
    return true
};