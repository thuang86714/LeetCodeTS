function findDuplicate(nums: number[]): number {
    let left = 1, right = nums.length - 1;
    while(left <= right){
        let mid = left + Math.floor((right - left)/2);
        let count = 0;
        for(let num of nums){
            if(num <= mid){
                count++;
            }
        }
        if(count <= mid){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return left;
};