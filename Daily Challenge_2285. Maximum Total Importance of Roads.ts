function maximumImportance(n: number, roads: number[][]): number {
    //TC O(n), SC O(n), counting sort
    const degreeCountArray: number[] = Array(n).fill(0);
    const freqCountArray: number[] = Array(n + 1).fill(0);

    for (let road of roads) {
        degreeCountArray[road[0]]++;
        degreeCountArray[road[1]]++;
    }

    for (let degree of degreeCountArray) {
        freqCountArray[degree]++;
    }

    let ans = 0, importance = n;
    for (let i = n; i >= 0; i--) {
        while (freqCountArray[i] > 0) {
            ans += (i * importance);
            freqCountArray[i]--;
            importance--;
        }
    }

    return ans;
};