function reverseString(s: string): string {
    return s.split('').reverse().join('');
}

function reverseParentheses(s: string): string {
    let stack: string[] = [];
    
    for (let char of s) {
        if (char === '(') {
            stack.push("(");
        } else if (char === ')') {
            let rev = "";
            while (stack.length > 0 && stack[stack.length - 1] !== "(") {
                let str = stack.pop()!;
                rev += reverseString(str);
            }
            stack.pop(); // Pop the '('
            stack.push(rev);
        } else {
            stack.push(char);
        }
    }
    
    let result = "";
    for (let str of stack) {
        result += str;
    }
    
    return result;
}