function minDays(bloomDay: number[], m: number, k: number): number {
    //TC O(n*log(max - min)), SC O(1)
    if (bloomDay.length < m * k) {
        return -1;
    }

    let left = 1, right = 1e9;
    for (let bloom of bloomDay) {
        left = Math.min(left, bloom);
        right = Math.max(right, bloom);
    }

    function canMakeBouquets(days: number): boolean{
        let curBouquets = 0, curFlowers = 0;
        for (let bloom of bloomDay) {
            if (bloom <= days) {
                curFlowers++;
                if (curFlowers == k) {
                    curBouquets++;
                    curFlowers = 0;
                } 
            } else {
                curFlowers = 0; 
            }
        }
        return curBouquets >= m;
    }

    while (left <= right) {
        let mid = Math.floor((right + left)/2);
        if(canMakeBouquets(mid)){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};