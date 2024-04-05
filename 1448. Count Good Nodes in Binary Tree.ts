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


function goodNodes(root: TreeNode | null): number {
    //TC O(n), SC O(logn)
    let goodNodeCount = 0;
    function findGoodNode(node: TreeNode | null, curMax: number){
        if(!node){
            return;
        }

        if(node.val >= curMax){
            goodNodeCount++;
            curMax = node.val;
        }

        findGoodNode(node.left, curMax);
        findGoodNode(node.right, curMax);
    }
    findGoodNode(root, -1e5);
    return goodNodeCount;
};