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

function oddEvenList(head: ListNode | null): ListNode | null {
    //TC O(n), SC O(1)
    if(!head || !head.next){
        return head;
    }
    // Initialize dummy heads for odd and even lists
    let oddDummy = new ListNode(0, head), evenDummy = new ListNode(0, head);
    // Initialize current pointers for odd and even lists
    let oddCur = oddDummy, evenCur = evenDummy;
    let isOdd = true;// Track whether the current node is odd or even

    // Iterate through the original list
    while(head){
        if(isOdd){
            // Add the node to the odd list
            oddCur.next = head;
            oddCur = oddCur.next;
        }else{
            // Add the node to the even list
            evenCur.next = head;
            evenCur = evenCur.next;
        }
        isOdd = !isOdd;
        head = head.next;// Move to the next node in the original list
    }
    oddCur.next = evenDummy.next;// Connect the odd list to the even list
    evenCur.next = null;// Terminate the even list

    return oddDummy.next;// The head of the rearranged list is the first odd node
};