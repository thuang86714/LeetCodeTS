class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function deleteNode(node: ListNode | null): void {
    //TC O(n), SC O(1)
    while(node){
        let nextVal = node.next!.val;
        node.val = nextVal;
        if(!node.next!.next){
            node.next = null;
        }
        node = node.next;
    }
};