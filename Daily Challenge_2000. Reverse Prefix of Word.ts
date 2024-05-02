function reversePrefix(word: string, ch: string): string {
    //TC O(n), SC O(n)
    let idx = 0;
    for(; idx < word.length; idx++){
        if(word[idx] == ch){
            break;
        }
    }
    if(idx == word.length){
        return word;
    }
    let toReversed = word.slice(0, idx + 1).split('').reverse().join('');
    let theRest = word.slice(idx + 1, word.length);
    return toReversed + theRest;
};