class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    }
}

function reorderList(head: ListNode | null): void {
    if (head === null || head.next === null || head.next.next === null) {
        return;
    }

    let slow: ListNode | null = head, fast: ListNode | null = head, prev: ListNode | null = null, temp: ListNode | null = null;

    // Divide the linked list into 2 halves using the slow-fast pointer technique
    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow!.next; // The non-null assertion is used because we already checked for null
        fast = fast.next.next;
    }

    // Disconnect the first half from the second
    if (prev !== null) prev.next = null;

    // Reverse the second half in place
    prev = null;
    while (slow !== null) {
        temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    // Now, 'prev' is the head of the reversed second half
    let secondHalf: ListNode | null = prev;
    let firstHalf: ListNode | null = head;

    // Merge the two halves
    while (firstHalf !== null && secondHalf !== null) {
        temp = firstHalf.next; // Store next node of first half
        firstHalf.next = secondHalf; // Link first half node to second half node
        firstHalf = temp; // Move firstHalf to next node in its list

        if (firstHalf !== null) {
            temp = secondHalf.next; // Store next node of second half
            secondHalf.next = firstHalf; // Link second half node back to first half node
            secondHalf = temp; // Move secondHalf to next node in its list
        }
    }
}
