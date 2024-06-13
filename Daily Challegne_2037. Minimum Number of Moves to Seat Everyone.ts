function minMovesToSeat(seats: number[], students: number[]): number {
    //TC O(nlogn), SC O(1)-->counting sort could reach TC O(n), SC O(1)
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    let ans = 0;
    for(let idx = 0; idx < seats.length; idx++){
        ans += Math.abs(seats[idx] - students[idx]);
    }
    return ans;
};