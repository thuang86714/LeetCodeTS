function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    //TC O(n), SC O(1)
    const dummy = new ListNode(0, list1);
    let left = dummy, right = dummy, cur = list2, prev = dummy, nxt = dummy;
    let nodeCount = -1;
    while(nodeCount < b){
        if(nodeCount < a){
            prev = left;
            left = left.next;
        }
        if(nodeCount < b){
            right = right.next;
        }
        nodeCount++;
    }
    nxt = right.next;
    prev.next = list2;
    while(cur.next){
        cur = cur.next;
    }
    cur.next = nxt;

    return dummy.next;
};