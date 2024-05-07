function compareVersion(version1: string, version2: string): number {
    //TC O(n), SC O(1)
    let subStrArray1 = version1.split('.');
    let subStrArray2 = version2.split('.');
    let idx1 = 0, idx2 = 0;
    while(idx1 < subStrArray1.length || idx2 < subStrArray2.length){
        let tempNum1: number, tempNum2: number;
        if(idx1 < subStrArray1.length){
            tempNum1 = parseInt(subStrArray1[idx1]);
        }else{
            tempNum1 = 0;
        }
        idx1++;
        if(idx2 < subStrArray2.length){
            tempNum2 = parseInt(subStrArray2[idx2]);
        }else{
            tempNum2 = 0;
        }
        idx2++;

        if(tempNum1 > tempNum2){
            return 1;
        }else if(tempNum1 < tempNum2){
            return -1;
        }
    }
    return 0;
};