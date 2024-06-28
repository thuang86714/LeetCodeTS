class SmallestInfiniteSet {
    curMin: number = 1;
    addedArray: number[] = [];
    constructor() {

    }

    popSmallest(): number {
        if (this.addedArray.length) {
            return this.addedArray.shift()!;
        } else {
            let ans = this.curMin;
            this.curMin++;
            return ans;
        }
    }

    addBack(num: number): void {
        if (num < this.curMin) {
            if (!this.addedArray.includes(num)) {
                this.addedArray.push(num);
                this.addedArray = this.addedArray.sort((a, b) => a - b);
            }
        }
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */