function minimumLength(s: string): number {
    //two pointer, TC O(n), SC O(1)
    let [left, right] = [0, s.length - 1];
    while(left < right && s[left] == s[right]){
        let cur = s[left];
        while(left <= right && s[left] == cur){
            left++;
        }
        while(left <= right && s[right] == cur){
            right--
        }
    }
    return right - left + 1;
};