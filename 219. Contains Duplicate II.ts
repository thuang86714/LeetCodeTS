function containsNearbyDuplicate(nums: number[], k: number): boolean {
    //TC O(n), SC O(n)
    let indexMap = new Map<number, number>()//using map to keep track of last visited index number
    for(let i = 0; i < nums.length; i++){
        if(indexMap.has(nums[i])){
           if(i - indexMap.get(nums[i]) <= k){
               return true
           } 
        }
        indexMap.set(nums[i], i)
    } 
    return false
};