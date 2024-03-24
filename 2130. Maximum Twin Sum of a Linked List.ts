
function pairSum(head: ListNode | null): number {
    const nodeValArray: number[] = [];
    while(head){
        nodeValArray.push(head.val);
        head = head.next;
    }
    let maxSum = 0, n = nodeValArray.length;
    for(let i = 0; i <= n/2 -1; i++){
        maxSum = Math.max(maxSum, nodeValArray[i] + nodeValArray[n - 1 - i]);
    }
    return maxSum;
};