class StockSpanner {
    private priceSlice: [number, number][];

    constructor() {
        this.priceSlice = [];
    }

    next(price: number): number {
        let span = 1;
        // Start from the end of the priceSlice and move backwards
        for (let i = this.priceSlice.length - 1; i >= 0; i--) {
            if (this.priceSlice[i][0] <= price) {
                span += this.priceSlice[i][1];
                this.priceSlice.pop(); // Remove the last element since it's included in the current span
            } else {
                break; // Stop the loop if the current price is higher than the price in priceSlice
            }
        }
        this.priceSlice.push([price, span]); // Add the current price and its span
        return span;
    }
}
