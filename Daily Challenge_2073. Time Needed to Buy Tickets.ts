function timeRequiredToBuy(tickets: number[], k: number): number {
    let step = 0;
    for(let i = 0; i < tickets.length; i++){
        if(i <= k){
            step += Math.min(tickets[i], tickets[k]);
        }else{
            step += Math.min(tickets[i], tickets[k] - 1);
        }
    }
    return step;
};