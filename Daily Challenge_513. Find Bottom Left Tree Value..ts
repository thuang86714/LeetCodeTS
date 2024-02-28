class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function findBottomLeftValue(root: TreeNode | null): number {
    //BFS, TC O(n), SC O(n)
    let treeNodeArray: TreeNode[] = [root];//there's no queue in TS, we use array instead
    let ans = 0;
    while(treeNodeArray.length > 0){
        const curSize = treeNodeArray.length;
        for(let i = 0; i < curSize; i++){
            let cur = treeNodeArray.shift();
            ans = cur.val;
            if(cur.right){
                treeNodeArray.push(cur.right);
            }
            if(cur.left){
                treeNodeArray.push(cur.left);
            }
        }
    }
    return ans;
};