/**
 Do not return anything, modify s in-place instead.
 */
 function reverseString(s: string[]): void {
    //TC O(n), SC O(1)
    let left = 0, right = s.length - 1;
    while(left < right){
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
};

/*
function reverseString(s: string[]): void {
    s.reverse()
};
*/