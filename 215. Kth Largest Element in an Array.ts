
function findKthLargest(nums: number[], k: number): number {
    //credit to realdennis
	const maxPriorityQueue = new MaxPriorityQueue({ priority: (val) => val });
	for (const num of nums) maxPriorityQueue.enqueue(num);
	let ret: number;

	for (let i = 1; i <= k; i++) ret = maxPriorityQueue.dequeue().element;
	return ret;
}