function findMaxK(nums: number[]): number {
    //TC O(n), SC O(n)
    let ans = -1;
    const negativeNumMap = new Map<number, boolean>();
    for(let num of nums){
        if(num < 0){
            negativeNumMap.set(num, true);
        }
    }

    for(let num of nums){
        if(num < 0){
            continue;
        }
        if(negativeNumMap.has(-1*num)){
            ans = Math.max(ans, num);
        }
    }

    return ans;
};

/*
function findMaxK(nums: number[]): number {
    //TC O(nlogn), SC O(1), sorting + two ptr
    nums.sort((a, b) => a- b);
    let left = 0, right = nums.length - 1;

    while(left < right){
        if(nums[left] + nums[right] == 0){
            return nums[right];
        }else if(nums[left] + nums[right] < 0){
            left++;
        }else{
            right--;
        }
    }
    return -1;
};
*/