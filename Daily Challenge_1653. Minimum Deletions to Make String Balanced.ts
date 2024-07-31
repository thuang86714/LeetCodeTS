function minimumDeletions(s: string): number {
    //credit to neetcode and arishta, TC O(n), SC O(1)
    let aCountRight = 0, bCountLeft = 0, result = s.length;

    for (let char of s) {
        if (char === "a") {
            aCountRight++;
        }
    }

    for (let char of s) {
        if (char === "a") {
            aCountRight--;
        }
        result = Math.min(result, aCountRight + bCountLeft);
        if (char === "b") {
            bCountLeft++;
        }
    }
    return result;
};