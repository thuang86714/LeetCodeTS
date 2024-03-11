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

function reverseList(head: ListNode | null): ListNode | null {
    //TC O(n), SC O(1)
    let prev: ListNode | null = null;
    let current: ListNode | null = head;
    while (current !== null) {
        let nextTemp: ListNode | null = current.next; // Store next node
        current.next = prev; // Reverse current node's pointer
        prev = current; // Move pointers one position ahead.
        current = nextTemp;
    }
    return prev; // New head of the reversed list
};