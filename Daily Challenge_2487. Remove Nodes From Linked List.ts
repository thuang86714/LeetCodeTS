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

function removeNodes(head: ListNode | null): ListNode | null {
    //TC O(n), SC O(n)
    let curMaxValArray: number[] = [];
    let dummy = new ListNode(0, head);
    let prev = dummy;

    //record the val of each node with curMaxValArray
    while(head){
        curMaxValArray.push(head.val);
        head = head.next;
    }
    let curMax = 0, idx = 0;
    //from tail to head, compare to get the local max val 
    for(let i = curMaxValArray.length - 1; i >= 0; i--){
        curMax = Math.max(curMax, curMaxValArray[i]);
        curMaxValArray[i] = curMax;
    }

    //if cur node val < curMaxVal, then prevPtr.Next = prevPtr.Next.Next
    while(prev.next){
        if(prev.next.val < curMaxValArray[idx]){
            let nextNode = prev.next.next
            prev.next = nextNode;
        }else if(prev.next.val === curMaxValArray[idx]){
            prev = prev.next;
        }
        idx++;
    }
    return dummy.next;
};