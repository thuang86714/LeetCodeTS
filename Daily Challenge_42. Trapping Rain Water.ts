function trap(height: number[]): number {
    //credit to hiepit and jacklee20499, TC O(n), SC O(1). two pointer
    let water = 0, left = 0, right = height.length - 1;
    let maxLeft = height[left], maxRight = height[right];
    while(left < right){
        if(maxLeft < maxRight){
            left++;
            maxLeft = Math.max(maxLeft, height[left]);
            water += maxLeft - height[left];
        }else{
            right--;
            maxRight = Math.max(maxRight, height[right]);
            water += maxRight - height[right];
        }
    }
    return water;
};