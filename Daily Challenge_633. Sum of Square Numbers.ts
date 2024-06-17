function judgeSquareSum(c: number): boolean {
    //TC O(c^(1/2)), SC O(1)
    let left = 0, right = Math.floor(Math.sqrt(c));//round down
    while(left <= right){
        let curSum = left*left + right*right;
        if(curSum === c){
            return true;
        }else if(curSum > c){
            right--;
        }else{
            left++;
        }
    }
    return false;
};