function isLetter(char: string): boolean {
    return /^[a-zA-Z]$/.test(char);//Regex
}

function isNumber(char: string): boolean {
    return /^[0-9]$/.test(char);//Regex
}
function isPalindrome(s: string): boolean {
    const newStr = s.toLowerCase();
    let left = 0, right = s.length - 1;
    while(left < right){
        while(left < right && !isLetter(newStr[left]) && !isNumber(newStr[left])){
            left++;
        }
        while(left < right && !isLetter(newStr[right]) && !isNumber(newStr[right])){
            right--;
        }
        if(newStr[left] !== newStr[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};