function numRescueBoats(people: number[], limit: number): number {
    //TC O(nlogn), SC O(1)
    people.sort((a, b) => a - b);
    let ans = 0, left = 0, right = people.length - 1;
    while(left <= right){
        if(people[left] + people[right] <= limit){
            left++;
        }
        right--;
        ans++;
    }
    return ans;
};