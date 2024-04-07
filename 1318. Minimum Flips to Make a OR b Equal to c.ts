function minFlips(a: number, b: number, c: number): number {
    c ^= a | b; // Perform the operation c = c ^ (a | b)
    // Implementing a simple popcount function for TypeScript.
    function popcount(x: number): number {
        let count = 0;
        while (x) {
            count += x & 1;
            x = x >>> 1;
        }
        return count;
    }
    return popcount(c) + popcount(a & b & c);
};