function maximumOddBinaryNumber(s: string): string {
    //TC O(n), SC O(1)
    let [oneCount, zeroCount] = [0, 0];
    for(let num of s){
        if(num == '1'){
            oneCount++;
        }else{
            zeroCount++;
        }
    }
    const ans: string = '1'.repeat(oneCount - 1) + '0'.repeat(zeroCount) + '1';
    return ans;
};