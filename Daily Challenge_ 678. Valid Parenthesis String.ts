function checkValidString(s: string): boolean {
    let minOpenPairCount = 0, maxOpenPairCount = 0;
    for(let char of s){
        if(char === '('){
            maxOpenPairCount++;
            minOpenPairCount++;
        }else if(char === ')'){
            maxOpenPairCount--;
            minOpenPairCount--;
        }else if (char === '*'){
            maxOpenPairCount++;// if `*` become `(` then openCount++
            minOpenPairCount--;// if `*` become `)` then openCount--
            // if `*` become `` then nothing happens
            // So openCount will be in new range [cmin-1, cmax+1]
        }
        if(maxOpenPairCount < 0){
            return false;
        }

        minOpenPairCount = Math.max(0, minOpenPairCount);
    }
    return minOpenPairCount === 0;
};