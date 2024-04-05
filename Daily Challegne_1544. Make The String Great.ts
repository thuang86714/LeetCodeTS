function makeGood(s: string): string {
    let result: string = "";
    for (const ch of s) {
        if (result.length > 0 && result[result.length - 1].toLowerCase() === ch.toLowerCase() &&
            result[result.length - 1] !== ch) {
            // Pop the last character if current and last characters are a bad pair.
            result = result.slice(0, -1);
        } else {
            // Otherwise, append the current character to the result.
            result += ch;
        }
    }
    return result;
}
