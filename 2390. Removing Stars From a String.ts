function removeStars(s: string): string {
    //TC O(n), SC O(n)
    const stringArray: string[] = [];
    for(let ch of s){
        if(ch === "*"){
            stringArray.pop();
        }else{
            stringArray.push(ch);
        }
    }

    let ans = "";
    while(stringArray.length != 0){
        ans += stringArray.shift();
    }

    return ans;
};