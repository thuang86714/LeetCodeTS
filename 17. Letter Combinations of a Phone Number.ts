let keyboard: { [digit: string]: string[] } = {
    '2': ['a', 'b', 'c'], '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'], '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'], '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'], '9': ['w', 'x', 'y', 'z']
};

function letterCombinations(digits: string): string[] {
const result: string[] = [];
if(digits.length == 0){
    return [];
}
findCombo(digits, "", 0, result);
return result;
};

function findCombo(digits: string, curString: string, idx: number, result: string[]): void{
if(idx == digits.length){
    result.push(curString);
    return;
}

for(let str of keyboard[digits[idx]]){
    findCombo(digits, curString + str, idx + 1, result);
}
}