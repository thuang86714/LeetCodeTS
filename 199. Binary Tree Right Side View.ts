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

function rightSideView(root: TreeNode | null): number[] {
    //BFS, TC O(n), SC O(n)
    if(!root){
        return [];
    }
    const ans = [];
    let nextLevelArray = [root];
    while(nextLevelArray.length){
        let rightNode: number;
        let tempArray = [];
        for(let node of nextLevelArray){
            rightNode = node.val;//the right-most node would eventually be stored in rightNode
            if(node.left){
                tempArray.push(node.left);
            }
            if(node.right){
                tempArray.push(node.right);
            }
        }
        ans.push(rightNode);
        nextLevelArray = tempArray
    } 
    return ans;
};