
function groupAnagrams(strs: string[]): string[][] {
    //credit to Mohamed_Elfar
    //using hashmap, with key is int slice(stringfied), and slice of string as value
    //TC O(m*n), where m is len(strs) and n is avg len of all words in strs
    //SC O(m)
    let charStrMap = new Map<string, string[]>();
    for (let str of strs){
        let charFrequencyArray = Array.from({length: 26}, () => 0);
        for(let i = 0; i < str.length; i++){
            charFrequencyArray[str.charCodeAt(i) - 97]++;
        }
        let keyStr = charFrequencyArray.toString();
        if(!charStrMap.has(keyStr)){
            charStrMap.set(keyStr, []);
        }
        charStrMap.get(keyStr).push(str);
    }
    return Array.from(charStrMap.values());
};