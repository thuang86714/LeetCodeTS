/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxLevelSum(root: TreeNode | null): number {
    //BFS, TC O(n), SC O(n)
    let curLevel = 1, maxLevel = 1, curMax = Number.MIN_SAFE_INTEGER;
    let nodeArray: TreeNode[] = [root];
    while(nodeArray.length){
        let curSize = nodeArray.length;
        let curSum = 0;
        const tempArray: TreeNode[] = [];
        for(let node of nodeArray){
            if(node.left){
                tempArray.push(node.left);
            }
            if(node.right){
                tempArray.push(node.right);
            }
            curSum += node.val;
        }
        if(curSum > curMax){
            curMax = curSum;
            maxLevel = curLevel;
        }
        curLevel++;
        nodeArray = tempArray;
    }
    return maxLevel;
};