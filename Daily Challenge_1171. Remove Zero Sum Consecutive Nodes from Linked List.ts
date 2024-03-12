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

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
    //credit to hiepit, TC O(n), SC O(n)
    let dummy = new ListNode(0, head);
    let cur = dummy;
    let prefix = 0;
    const seen = new Map<number, ListNode>();//<curPrefix, ListNode>
    while(cur){
        prefix += cur.val;
        seen[prefix] = cur;//this way we will only store the last node that have the same prefix sum
        cur = cur.next;
    }
    cur = dummy;
    prefix = 0;
    while(cur){
        prefix += cur.val;
        cur.next = seen[prefix].next;//connect to the last node with the same prefix sum
        cur = cur.next;
    }
    return dummy.next;
};