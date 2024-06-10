function commonChars(words: string[]): string[] {
    //TC O(n*m) where m is average len of all words, SC O(1)
    const charCountArray: number[] = new Array(26).fill(0);
    const ans: string[] = [];
    for(let i = 0 ; i < words[0].length; i++){
        charCountArray[words[0].charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    for(let word of words){
        const tempCharCountArray: number[] = new Array(26).fill(0);
        for(let i = 0 ; i < word.length; i++){
            tempCharCountArray[word.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
        for(let i = 0; i < 26; i++){
            charCountArray[i] = Math.min(charCountArray[i], tempCharCountArray[i]);
        }
    }

    for(let i = 0; i < 26; i++){
        for(let j = 0; j < charCountArray[i]; j++){
            ans.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
        }
    }
    return ans;
};