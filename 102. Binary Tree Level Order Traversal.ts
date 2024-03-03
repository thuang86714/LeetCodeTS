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

function levelOrder(root: TreeNode | null): number[][] {
    //BFS, TC O(n), SC O(n)
    if(!root){
        return [];
    }
    let nextLevelArray: TreeNode[] = [root];
    let ans: number[][] = [];
    while(nextLevelArray.length){
        let thisLevelArray: number[] = [];
        let tempArray: TreeNode[] = [];
        for(let i = 0; i < nextLevelArray.length; i++){
            let node = nextLevelArray[i];
            thisLevelArray.push(node.val);
            if(node.left){
                tempArray.push(node.left);
            }
            if(node.right){
                tempArray.push(node.right);
            }
        }
        ans.push(thisLevelArray);
        nextLevelArray = tempArray;
    }
    return ans;
};