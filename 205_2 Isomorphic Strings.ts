function isIsomorphic(s: string, t: string): boolean {
    //TC O(n), SC O(n)
    const sMap = new Map<string,string>();
    const tMap = new Map<string,string>();

    for(let i = 0; i < s.length; i++){
        if(!sMap.has(s[i]) && !tMap.has(t[i])){
            sMap.set(s[i], t[i]);
            tMap.set(t[i], s[i]);
        }else{
            if(sMap.get(s[i]) == t[i] && tMap.get(t[i]) == s[i]){
                continue;
            }
            return false;
        }
    }
    return true;
};