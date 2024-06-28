function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    //credit to ArtMe
  const graph = {};
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    if (!graph[a]) {
        graph[a] = {};
    }
    if (!graph[b]) {
        graph[b] = {};
    }
    graph[b][a] = values[i];
    graph[a][b] = 1 / values[i];
  }

  function dfs(src: string, target: string, seen: Set<string>): number {
    if (!graph[src] || !graph[target]) {
        return -1;
    }
    if (src === target) {
        return 1;
    }
    for (const neighbor in graph[src]) {
      if (seen.has(neighbor)) {
          continue;
      }
      const result = dfs(neighbor, target, seen.add(neighbor)) * graph[neighbor][src];
      if (result > 0) {
          return result;
      }
    }
    return -1;
  }

  return queries.map(q => dfs(q[0], q[1], new Set<string>()));
};