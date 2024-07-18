function minOperations(logs: string[]): number {
    let ans = 0;
    for (let log of logs) {
        if (log === "../") {
            if (ans > 0) {
                ans--;
            }
        } else if (log === "./") {
            continue;
        } else {
            ans++;
        }
    }
    if (ans < 0) {
        return 0;
    }
    return ans;
};