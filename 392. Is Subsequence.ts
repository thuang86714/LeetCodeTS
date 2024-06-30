function isSubsequence(s: string, t: string): boolean {
    let idxS = 0, idxT = 0;
    while (idxS < s.length && idxT < t.length) {
        if (s[idxS] === t[idxT]) {
            idxS++;
        }
        idxT++;
    }
    return idxS === s.length;
};