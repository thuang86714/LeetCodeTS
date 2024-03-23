class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function isPalindrome(head: ListNode | null): boolean {
    if (!head) return true; // Early return if the list is empty

    let slow: ListNode | null = head, fast: ListNode | null = head;
    let prev: ListNode | null = null, temp: ListNode | null = null;

    // Find the midpoint of the list
    while (fast !== null && fast.next !== null) {
        slow = slow!.next; // `slow!` asserts that slow is not null here.
        fast = fast.next.next;
    }

    // Reverse the second half of the list
    while (slow !== null) {
        temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    // Compare the first half and the reversed second half
    slow = prev; // `prev` now points to the head of the reversed second half
    while (slow !== null) {
        if (head.val !== slow.val) {
            return false;
        }
        head = head.next;
        slow = slow.next;
    }
    return true;
}
