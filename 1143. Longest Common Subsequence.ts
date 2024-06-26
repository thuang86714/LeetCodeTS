function longestCommonSubsequence(text1: string, text2: string): number {
    let curMemo: number[][] = new Array(1001);
    for (let i = 0; i < curMemo.length; i++) {
        curMemo[i] = new Array(1001).fill(0);
    }

    for (let i = 0; i < text1.length; i++) {
        for (let j = 0; j < text2.length; j++) {
            curMemo[i + 1][j + 1] = text1[i] == text2[j] ?
                curMemo[i][j] + 1 :
                Math.max(curMemo[i][j + 1], curMemo[i + 1][j]);
        }
    }
    return curMemo[text1.length][text2.length];
};