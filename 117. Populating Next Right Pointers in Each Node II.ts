/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
    //bfs, TC O(n), SC O(n)
    if(!root){
        return root;
    }
    let curLevelArray: Node[] = [root];
    while(curLevelArray.length){
        let curSize = curLevelArray.length;
        let tempArray: Node[] = [];
        for(let i = 0; i < curSize; i++){
            let curNode = curLevelArray[i];
            if(i != curSize - 1){
                curNode.next = curLevelArray[i + 1];
            }
            if(curNode.left){
                tempArray.push(curNode.left);
            }
            if(curNode.right){
                tempArray.push(curNode.right);
            }
        }
        curLevelArray = tempArray;
    }
    return root;
};