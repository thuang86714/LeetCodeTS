function twoSum(numbers: number[], target: number): number[] {
    //two pointer, TC O(n), SC O(1)
    let left = 0, right = numbers.length - 1;
    while (left < right) {
        let curSum = numbers[left] + numbers[right];
        if (curSum === target) {
            return [left + 1, right + 1];
        } else if (curSum > target) {
            right--;
        } else if (curSum < target) {
            left++;
        }
    }
    return [-1, -1];
};