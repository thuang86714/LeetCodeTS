function longestCommonPrefix(strs: string[]): string {
    let count = 0;
    strs.sort();
    let frontStr = strs[0], backStr = strs[strs.length - 1];
    for (let i = 0; i < Math.min(frontStr.length, backStr.length); i++) {
        if (frontStr[i] !== backStr[i]) {
            break;
        }
        count++;
    }
    return frontStr.slice(0, count);
};