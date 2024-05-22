let res: string[][];
function isPalindrome(s: string, left: number, right: number): boolean{
    while(left < right){
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function findPartition(s: string, idx: number, temp: string[]): void{
    if(idx == s.length){
        res.push(temp.slice());
        return;
    }

    for(let i = idx; i < s.length; i++){
        if(isPalindrome(s, idx, i)){
            temp.push(s.slice(idx, i + 1));
            findPartition(s, i + 1, temp);
            temp.pop();
        }
    }
}

function partition(s: string): string[][] {
    res = [];
    let temp: string[] = [];
    findPartition(s, 0, temp);
    return res;
};