let directedGraph: Map<number, Map<number, boolean>>;
let unDirectedGraph: Map<number, number[]>;
let visitedMap: Map<number, boolean>;

function buildGraph(connections: number[][]) {
    directedGraph = new Map<number, Map<number, boolean>>();
    unDirectedGraph = new Map<number, number[]>();

    for (let connection of connections) {
        if (!directedGraph.has(connection[1])) {
            directedGraph.set(connection[1], new Map<number, boolean>());
        }
        if (!directedGraph.has(connection[0])) {
            directedGraph.set(connection[0], new Map<number, boolean>());
        }

        if (!unDirectedGraph.has(connection[0])) {
            unDirectedGraph.set(connection[0], []);
        }
        if (!unDirectedGraph.has(connection[1])) {
            unDirectedGraph.set(connection[1], []);
        }

        unDirectedGraph.get(connection[0])!.push(connection[1]);
        unDirectedGraph.get(connection[1])!.push(connection[0]);
        directedGraph.get(connection[1])!.set(connection[0], true);
    }
}

function minReorder(n: number, connections: number[][]): number {
    buildGraph(connections);
    visitedMap = new Map<number, boolean>();
    let toVisitQueue: number[] = [0];
    let reorderCount: number = 0;

    while (toVisitQueue.length > 0) {
        const current = toVisitQueue.shift()!;
        visitedMap.set(current, true);

        for (let nextNode of unDirectedGraph.get(current)!) {
            if (visitedMap.get(nextNode)) {
                continue;
            }
            // We need to check if the edge from `current` to `nextNode` does not exist in the directed graph
            if (!directedGraph.get(current)?.has(nextNode)) {
                reorderCount++;
            }
            toVisitQueue.push(nextNode);
        }
    }

    return reorderCount;
}