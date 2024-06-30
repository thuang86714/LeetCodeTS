function buildGraph3(edges: number[][], directedGraphSlice: number[][]): void {
    for (const edge of edges) {
        directedGraphSlice[edge[1]].push(edge[0]);
    }
}

function getAncestors(n: number, edges: number[][]): number[][] {
    // Initialize slices
    const directedGraphSlice: number[][] = Array.from({ length: n }, () => []);
    const ansSlice: number[][] = Array.from({ length: n }, () => []);

    buildGraph3(edges, directedGraphSlice);

    // Perform BFS for each node
    for (let idx = 0; idx < n; idx++) {
        const visitedMap: { [key: number]: boolean } = {};
        const toVisitSlice: number[] = [idx];

        while (toVisitSlice.length > 0) {
            const curNode = toVisitSlice.shift()!;

            for (const ancestor of directedGraphSlice[curNode]) {
                if (!visitedMap[ancestor]) {
                    visitedMap[ancestor] = true;
                    ansSlice[idx].push(ancestor);
                    toVisitSlice.push(ancestor);
                }
            }
        }

        ansSlice[idx].sort((a, b) => a - b);
    }

    return ansSlice;
}