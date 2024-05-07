function reverseList(node: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let curr = node;
    while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

function doubleIt(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }
    let cur = reverseList(head);
    let reverseNode = cur;
    let carry = 0;
    while (cur !== null) {
        const newVal = cur.val * 2 + carry;
        cur.val = newVal % 10;
        carry = Math.floor(newVal / 10);;
        if (cur.next === null) {
            break;
        }
        cur = cur.next;
    }

    if (carry > 0) {
        cur!.next = new ListNode(carry);
    }
    return reverseList(reverseNode);
}