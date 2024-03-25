function predictPartyVictory(senate: string): string {
    //credit to caihao0727mail, TC O(n), SC O(n)
    const rIdxArray: number[] = [], dIdxArray: number[] = [];
    const n = senate.length;
    for(let i = 0; i < n; i++){
        if(senate[i] === "R"){
            rIdxArray.push(i);
        }else{
            dIdxArray.push(i);
        }
    }

    while(rIdxArray.length != 0 && dIdxArray.length != 0){
        let rIdx = rIdxArray.shift(), dIdx = dIdxArray.shift();
        if(rIdx < dIdx){
            rIdxArray.push(rIdx + n);//the operation plus n means the corresponding senate can keep "alive" to the next round.
        }else{
            dIdxArray.push(dIdx + n);
        }
    }

    if(rIdxArray.length > dIdxArray.length){
        return "Radiant";
    }
    return "Dire";
};