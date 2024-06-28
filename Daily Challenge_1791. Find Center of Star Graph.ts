function findCenter(edges: number[][]): number {
    //find the node with highest degree, TC O(n), SC O(n)
    const n = edges.length + 1;
    let ans = 0, curCount = 0;
    const degreeCountArray: number[] = Array(n + 1).fill(0);

    for (let edge of edges) {
        degreeCountArray[edge[0]]++;
        degreeCountArray[edge[1]]++;
    }

    for (let idx = 1; idx < degreeCountArray.length; idx++) {
        if (degreeCountArray[idx] > curCount) {
            curCount = degreeCountArray[idx];
            ans = idx;
        }
    }
    return ans;
};

/*
function findCenter(edges: number[][]): number {
    // credit to votrubac, TC O(1), SC O(1)
    // Basically, a center node must appear in every edge.
    if (edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]) {
        return edges[0][0];
    }
    return edges[0][1];
};
*/