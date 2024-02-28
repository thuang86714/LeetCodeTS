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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    let cur = new ListNode(0);
    let dummy: ListNode | null = cur;
    while(l1 || l2 || carry > 0){
        if(l1){
            carry += l1.val;
            l1 = l1.next;
        }
        if(l2){
            carry += l2.val
            l2 = l2.next;
        }
        cur.next = new ListNode(carry%10);
        carry = Math.floor(carry/10);
        cur = cur.next;
    }
    return dummy.next;
};