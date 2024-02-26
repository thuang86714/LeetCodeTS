function isAnagram(s: string, t: string): boolean {
    if(s.length != t.length){
        return false
    }
    //TC O(s.len + t.len), SC O(1)
    let charMap = new Map<string, number>() 
    for(let ch of s){
        if(charMap[ch]){
            charMap[ch]++
        }else{
            charMap[ch] = 1
        }
    }
    for(let ch of t){
        if(charMap[ch]){
            charMap[ch]--
        }else{
            return false
        }
    }
    
    return true
};