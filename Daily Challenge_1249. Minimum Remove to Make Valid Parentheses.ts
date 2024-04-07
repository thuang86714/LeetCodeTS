function minRemoveToMakeValid(s: string): string {
    const removeIndices = new Set<number>();
    const stack: number[] = [];

    // Single pass to identify parentheses to be removed
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(') {
            stack.push(i);
        } else if (char === ')') {
            if (stack.length > 0) {
                stack.pop(); // Found a matching pair, so remove the opening '(' from stack
            } else {
                removeIndices.add(i); // Unmatched ')' needs to be removed
            }
        }
    }

    // Any remaining '(' in the stack are unmatched and should be removed
    stack.forEach(index => removeIndices.add(index));

    // Construct the result string, excluding the indices marked for removal
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!removeIndices.has(i)) {
            result += s[i];
        }
    }

    return result;
}
