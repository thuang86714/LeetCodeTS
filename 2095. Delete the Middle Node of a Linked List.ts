class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
   }
}


function deleteMiddle(head: ListNode | null): ListNode | null {
    //TC O(n), SC O(1)
    let dummy = new ListNode(0, head);
    let slow: ListNode | null = dummy;
    let fast: ListNode | null = dummy;
    // Fast pointer moves two steps at a time, slow pointer moves one step at a time.
    while(fast.next !== null&& fast.next.next !== null){
        slow = slow!.next;
        fast = fast.next.next;
    }

    if (slow && slow.next) {// Delete the middle node. The slow pointer is at the node preceding the middle node.
        slow.next = slow.next.next;
    }

    return dummy.next;
};