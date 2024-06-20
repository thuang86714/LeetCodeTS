function maxDistance(position: number[], m: number): number {
    //credit to alanlzl, O(NlogM), where M = max(position) - min(position), Space complexity: O(1)
    position.sort((a, b)=> a - b);
    let left = 0, right = position[position.length - 1] - position[0];

    function countNode(position: number[], curDist: number): number {
        let ans = 1, cur = position[0];
        for(let i = 1; i < position.length; i++){
            if(position[i] - cur >= curDist){
                ans++;
                cur = position[i];
            }
        }
        return ans;
    }

    while(left <= right){
        let mid = Math.floor((right - left)/2 + left);
        if(countNode(position, mid) >= m){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return right;
};