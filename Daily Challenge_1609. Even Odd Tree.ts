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

function isEvenOddTree(root: TreeNode | null): boolean {
    //bfs, TC O(n), SC O(n)
    let nextLevelArray: TreeNode[] = [root];
    let curLevel = 0;
    while(nextLevelArray.length != 0){
        let curVal = -1;
        let tempArray: TreeNode[] = [];
        for(let i = 0; i < nextLevelArray.length; i++){
            let node = nextLevelArray[i]
            if(node.val%2 == curLevel%2){
                return false;
            }
            if(curVal != -1 && ((curLevel%2 && curVal <= node.val)||(!(curLevel%2) && curVal >= node.val))){
                return false;
            }
            curVal = node.val;
            if(node.left){
                tempArray.push(node.left);
            }
            if(node.right){
                tempArray.push(node.right);
            }
        }
        curLevel++;
        nextLevelArray = tempArray;
    }
    return true;
};