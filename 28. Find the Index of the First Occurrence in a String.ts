function strStr(haystack: string, needle: string): number {
    if(needle === ""){
        return 0;
    }
    const haystackLen = haystack.length, needleLen = needle.length;
    for(let i = 0; i < haystackLen - needleLen + 1; i++){
        if(haystack.slice(i, i + needleLen) === needle){
            return i;
        }
    }
    return -1;
};