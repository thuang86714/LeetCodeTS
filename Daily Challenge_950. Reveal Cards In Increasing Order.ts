function deckRevealedIncreasing(deck: number[]): number[] {
    //TC O(nlogn), SC O(n)
    deck.sort((a, b)=> a- b)
    const ans: number[] = [];
    const deckArray: number[] = [];
    //reverse the reveal and pop operation
    for(let i = deck.length - 1; i >= 0; i--){
        deckArray.push(deck[i]);
        if(i > 0){
            let cur = deckArray.shift()!;
            deckArray.push(cur);
        }
    }

    deckArray.reverse();
    return deckArray;
};