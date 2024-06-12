function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const orderMap = new Map<number, number>();
    arr2.forEach((value, index) => {
        orderMap.set(value, index);
    });

    arr1.sort((a, b) => {
        const aIndex = orderMap.get(a);
        const bIndex = orderMap.get(b);

        // If both elements are in arr2
        if (aIndex !== undefined && bIndex !== undefined) {
            return aIndex - bIndex;
        }
        
        // If only 'a' is in arr2
        if (aIndex !== undefined) {
            return -1; // a should come before b
        }
        
        // If only 'b' is in arr2
        if (bIndex !== undefined) {
            return 1; // b should come before a
        }

        // If neither are in arr2, sort based on their values
        return a - b;
    });

    return arr1;
};

// function relativeSortArray(arr1: number[], arr2: number[]): number[] {
//     //TC O(nlogn), SC O(n)
//     const numCountMap: Map<number, number> = new Map();
//     for(let num of arr1){
//         numCountMap.set(num, (numCountMap.get(num) || 0) + 1);
//     }
//     let idx = 0;
//     for(let num of arr2){
//         while(numCountMap.get(num) && numCountMap.get(num)! > 0){
//             arr1[idx] = num;
//             idx++;
//             numCountMap.set(num, numCountMap.get(num)! - 1);
//         }
//     }

//     let restArray: number[] = [];
//     for(let [key, value] of numCountMap.entries()){
//         while(value > 0){
//             restArray.push(key);
//             value--;
//         }
//     }
//     restArray.sort((a, b) =>a - b);
//     arr1.splice(idx, restArray.length, ...restArray);
//     return arr1;
// };