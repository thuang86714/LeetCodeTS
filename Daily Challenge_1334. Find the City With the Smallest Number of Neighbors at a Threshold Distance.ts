function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
    // Initialize the graph with the maximum distance
    const graph: number[][] = Array.from({ length: n }, () => Array(n).fill(10001));

    // Fill the graph with the given edges
    for (const [u, v, w] of edges) {
        graph[u][v] = w;
        graph[v][u] = w;
    }

    // Distance to itself is 0
    for (let i = 0; i < n; i++) {
        graph[i][i] = 0;
    }

    // Floyd-Warshall algorithm to find the shortest paths
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
            }
        }
    }

    // Find the city with the smallest number of reachable cities within the distance threshold
    let res = 0;
    let smallest = n;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (graph[i][j] <= distanceThreshold) {
                count++;
            }
        }
        if (count <= smallest) {
            res = i;
            smallest = count;
        }
    }

    return res;
}