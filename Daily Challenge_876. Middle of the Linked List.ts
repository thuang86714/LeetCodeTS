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

function middleNode(head: ListNode | null): ListNode | null {
    if(!head || !head.next){
        return head;
    }
    let slow = head, fast = head;
    let countLen = 0, target = 0;
    while(fast.next){
        countLen++;
        fast = fast.next;
    }
    if(countLen%2 === 1){
        target = Math.floor(countLen/2) + 1;
    }else{
        target = countLen/2;
    }
    for(let i = 0; i < target; i++){
        slow = slow.next;
    }
    return slow;
};