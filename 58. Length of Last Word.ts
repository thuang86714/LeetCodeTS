function lengthOfLastWord(s: string): number {
    let ans = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ' && ans != 0) {
            break;
        }
        if (s[i] === ' ') {
            continue
        }
        ans++;
    }
    return ans;
};