function maxArea(height: number[]): number {
    //two pointer, TC O(n), SC O(1)
    let [left, right, curWater] = [0, height.length - 1, 0];
    while(left < right){
        let curHeight = Math.min(height[left], height[right]);
        let curWidth = right - left;
        curWater = Math.max(curWater, curHeight * curWidth);
        while(left < right && height[left] <= curHeight){
            left++;
        }
        while(left < right && height[right] <= curHeight){
            right--;
        }
    }
    return curWater;
};