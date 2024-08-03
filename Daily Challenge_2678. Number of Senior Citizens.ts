function countSeniors(details: string[]): number {
    let count = 0;
    for(let detail of details){
        let curCum = Number(detail[11] + detail[12]);
        if(curCum > 60){
            count++;
        }
    }
    return count;
};