function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    //TC O(max(nlogn, m*logn)), where m is spells.size(), n is potions.size(), SC O(1)
    potions.sort((a,b) =>a - b);
    const pairs = [];
    for(let spell of spells){
        let left = 0, right = potions.length - 1;
        while(left <= right){
            let mid = left + Math.floor((right - left)/2);
			// Casting spell to int64 to ensure multiplication doesn't overflow.
            if((spell*potions[mid]) >= success){//this potion would succed, go left to find the potion with less strength
                right = mid - 1
            }else{
                left = mid + 1
            }
        }
        pairs.push(potions.length - left);//all potions on the right of the left potion(inclusive) would be successful 
    }
    return pairs;
};

//credit to polyym
/**
 * Performs binary search on a sorted array to find the index where the target value should be inserted.
 * 
 * @param arr - A sorted array of numbers.
 * @param target - The target number to be searched for.
 * @returns The index where the target value should be inserted to maintain the sorted order.
 */
function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;
  
    // Iterate until the left and right pointers converge.
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
  
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    // Return the index where the target value should be inserted.
    return left;
  }
  
  /**
   * Calculates the number of successful pairs of spells and potions.
   * A spell and potion pair is considered successful if the product of their strengths is at least `success`.
   *
   * @param spells - An array of integers representing the strengths of the spells.
   * @param potions - An array of integers representing the strengths of the potions.
   * @param success - An integer representing the minimum product of spell and potion strengths required for success.
   * @returns An array of integers representing the number of potions that will form a successful pair with each spell.
   */
  function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    // Sort the potions list in ascending order to allow for efficient binary search.
    potions.sort((a, b) => a - b);
  
    // Iterate over each spell in the spells list and use binary search to find the index of the first potion
    // that forms a successful pair, then calculate the number of successful pairs for each spell.
    // The map function creates a new array with the results of calling the provided function on every element in the original spells array.
    return spells.map(
      // Calculate the minimum potion strength required to form a successful pair
      // with the current spell, and use binary search to find the index where the target value should be inserted.
      (spell) => potions.length - binarySearch(potions, Math.ceil(success / spell))
    );
  }