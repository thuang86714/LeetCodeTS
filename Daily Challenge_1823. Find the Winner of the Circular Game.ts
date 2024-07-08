function findTheWinner(n: number, k: number): number {
    /*
       TC O(n), SC O(1)
       credit to hritesh_bhardwaj
       Intution : If I have the winner for 'n-1' and 'k'.
       I can find the winner for 'n' and 'k' by moving on to the next kth
       person (i.e. f(n) = f(n-1)+k).
    */
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans = (ans + k) % i;
    }
    return ans + 1;
};

/*
function findTheWinner(n: number, k: number): number {
    let circleArray: number[] = [];
    for (let i = 1; i <= n; i++) {
        circleArray.push(i);
    }

    while (circleArray.length > 1) {
        let curK = k, lastNode = 0;
        while (curK > 0) {
            if (lastNode != 0) {
                circleArray.push(lastNode);
            }
            lastNode = circleArray.shift()!;
            curK--;
        }
    }
    return circleArray[0];
};
*/