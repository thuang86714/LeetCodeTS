function isValid(s: string): boolean {
    //credit to miawue, TC O(n), SC O(n)
    const bracketsMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    let openBracketsStack = []

    for (let i = 0; i < s.length; i++) {
        const currentBracket = s[i]

        if (['(', '[', '{'].includes(currentBracket)) {
            openBracketsStack.push(currentBracket)
        } else if (openBracketsStack.pop() !== bracketsMap[currentBracket]) {
            return false
        }
    }
    return !openBracketsStack.length
};