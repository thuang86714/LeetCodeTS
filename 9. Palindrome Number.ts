function isPalindrome(x: number): boolean {
    //credit to sisidra, TC O(logn), SC O(1)
    if (x < 0) return false;
    
    let x1 = 0;
    let div = x;
    while (div > 0) {
        const quotient = Math.floor(div / 10);
        const reminder = div - quotient * 10;
        div = quotient;
        x1 = x1 * 10 + reminder;
    }
    
    return x === x1;
};