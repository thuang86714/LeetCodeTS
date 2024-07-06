function passThePillow(n: number, time: number): number {
    const tripCount = Math.floor(time / (n - 1));
    time %= (n - 1);

    if (tripCount % 2 === 0) {
        return 1 + time;
    }
    return n - time;
};