const charToIntMap = new Map<string, number>([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
]);
function romanToInt(s: string): number {
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && (charToIntMap.get(s[i]) < charToIntMap.get(s[i + 1]))) {
            ans -= charToIntMap.get(s[i]);
        } else {
            ans += charToIntMap.get(s[i]);
        }
    }
    return ans;
};