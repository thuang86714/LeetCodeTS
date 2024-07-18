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
 
class NodePair {
    node: TreeNode;
    isChild: number;

    constructor(node: TreeNode, isChild: number) {
        this.node = node;
        this.isChild = isChild;
    }
}

function createBinaryTree(descriptions: number[][]): TreeNode | null {
    const valTreeNodeMap = new Map<number, NodePair>();
    let ans: TreeNode | null = null;

    for (const description of descriptions) {
        const rootVal = description[0];
        const childVal = description[1];
        const isLeft = description[2];

        let curRoot: TreeNode;
        if (!valTreeNodeMap.has(rootVal)) {
            valTreeNodeMap.set(rootVal, new NodePair(new TreeNode(rootVal), 0));
        }
        curRoot = valTreeNodeMap.get(rootVal)!.node;

        if (!valTreeNodeMap.has(childVal)) {
            valTreeNodeMap.set(childVal, new NodePair(new TreeNode(childVal), 1));
        } else {
            const temp = valTreeNodeMap.get(childVal)!.node;
            valTreeNodeMap.set(childVal, new NodePair(temp, 1));
        }

        if (isLeft === 1) {
            curRoot.left = valTreeNodeMap.get(childVal)!.node;
        } else {
            curRoot.right = valTreeNodeMap.get(childVal)!.node;
        }
    }

    for (const [_, nodePair] of valTreeNodeMap) {
        if (nodePair.isChild === 0) {
            ans = nodePair.node;
        }
    }

    return ans;
}