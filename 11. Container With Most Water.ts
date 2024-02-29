function maxArea(height: number[]): number {
    //TC O(n), SC O(1)
    let [water, left, right] = [0, 0, height.length - 1];
    while(left <= right){
        let [w, h] = [right - left, Math.min(height[left], height[right])];
        water = Math.max(water, w*h);
        while(left <= right && height[left] <= h){
            left++;
        }
        while(left <= right && height[right] <= h){
            right--;
        }
    }
    return water;
};