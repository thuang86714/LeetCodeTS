function minEatingSpeed(piles: number[], h: number): number {
    //k has an interval [1, *max_element(piles.begin(), miles.end())];
    //need to find the k that KoKo could cosume all bananas just in time
    //TC O(n*logm), where n is the len of piles and m is the max number in piles, SC O(1)
    let left = 1, right = piles.reduce((max, current) => Math.max(max, current), piles[0]);
    while(left <= right){
        let k = left + Math.floor((right - left)/2);
        let sumTime = 0;
        for(let banana of piles){
            sumTime += Math.ceil(banana/k);
        }
        if(sumTime <= h){//KoKo eats too fast, needs to slow down
            right = k - 1;
        }else{
            left = k + 1;//KoKo eats too slow, needs to speed up
        }
    }
    return left;
};