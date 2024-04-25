function buildGraph(edges: number[][]): Map<number, number[]>{
    let graph: Map<number, number[]> = new Map();
    for(let edge of edges){
        if(!graph.has(edge[0])){
            graph.set(edge[0], []);
        }
        if(!graph.has(edge[1])){
            graph.set(edge[1], []);
        }
        graph.get(edge[0])!.push(edge[1]);
        graph.get(edge[1])!.push(edge[0]);
    }
    return graph;
}
function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    //bfs, TC O(V+E), SC O(V^2)
    if(source == destination){
        return true;
    }

    let visitedMap: Map<number, boolean> = new Map();
    visitedMap.set(source, true);

    let toVisitArray: number[] = [source];

    let graph = buildGraph(edges);
    if(!graph.get(source) || !graph.get(destination)){
        return false;// Return false if source or destination is not in the graph
    }

    while(toVisitArray.length != 0){
        let curVertex = toVisitArray.shift();
        let neighbors = graph.get(curVertex!);

        if(!neighbors){//early return
            return false;
        }
        for(let nextVertex of neighbors){
            if(nextVertex == destination){
                return true;
            }

            if(!visitedMap.get(nextVertex)){
                visitedMap.set(nextVertex, true);
                toVisitArray.push(nextVertex);
            }
        }
    }
    return false;
};