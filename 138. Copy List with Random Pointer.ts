/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
    //map + linked list, partial credit to Hiruto, TC O(n), SC O(n)
    if(!head){
        return head;
    }
    let nodeMap = new Map<Node, Node>();
    let old = head;
    while(old){
        nodeMap.set(old, new Node(old.val, old.next, old.random));
        old = old.next;
    }
    nodeMap.forEach(node =>{
        if(node.next){
            node.next = nodeMap.get(node.next);
        }
        if(node.random){
            node.random = nodeMap.get(node.random);
        }
    });
    return nodeMap.get(head);
};