/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    //TC O(n), SC O(n)
    let dummy = new ListNode(0, head);
    let cur = dummy, prev = dummy;
    const nodeArray: ListNode[] = [];
    for(let i = 0; i < left; i++){
        prev = cur;
        cur = cur.next;
    }
    for(let i = left; i <= right; i++){
        nodeArray.push(cur);
        cur = cur.next;
    }
    nodeArray.reverse();
    for(let node of nodeArray){
        prev.next = node;
        prev = prev.next;
    }
    prev.next = cur;

    return dummy.next;
};