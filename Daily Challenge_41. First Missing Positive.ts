function firstMissingPositive(nums: number[]): number {
    let n = nums.length, i = 0;
    while(i < n){
      if(nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]){
          [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
      }else{
          i++;
      }
    }
  
    for(let i = 0; i < n; i++){
      if(nums[i] != i + 1){
          return i + 1;
      }
    }
    return n + 1;  
  };