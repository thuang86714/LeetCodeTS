function removeKdigits(num: string, k: number): string {
    if (num.length <= k) {
        return "0";
    }

    if (k === 0) {
        return num;
    }

    let numStack: string[] = [];

    for (let i = 0; i < num.length; i++) {
        while (k > 0 && numStack.length > 0 && num.charAt(i) < numStack[numStack.length - 1]) {
            numStack.pop();
            k--;
        }
        numStack.push(num.charAt(i));
        // Prevent appending leading zeros to the result
        if (numStack.length === 1 && num.charAt(i) === '0') {
            numStack.pop();
        }
    }

    // If k is still positive, remove the last k digits
    while (k > 0 && numStack.length > 0) {
        numStack.pop();
        k--;
    }

    // Convert numStack to string
    let result = numStack.join('');

    // If the result is empty or all zeros, return "0"
    result = result.replace(/^0+/, '');

    return result === '' ? '0' : result;
}
