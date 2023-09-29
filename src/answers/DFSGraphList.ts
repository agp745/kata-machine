function search(
  graph: WeightedAdjacencyList,
  curr: number,
  needle: number,
  seen: boolean[],
  path: number[],
): boolean {
  if (seen[curr]) {
    return false
  }

  seen[curr] = true
  path.push(curr)

  if (curr === needle) {
    return true
  }

  const adjsList = graph[curr]
  for (let i = 0; i < adjsList.length; i++) {
    const edge = adjsList[i]

    if (search(graph, edge.to, needle, seen, path)) {
      return true
    }
  }

  path.pop()
  return false
}

export default function dfs(
  graph: WeightedAdjacencyList,
  source: number,
  needle: number,
): number[] | null {
  const seen: boolean[] = new Array(graph.length).fill(false)
  const path: number[] = []

  search(graph, source, needle, seen, path)

  if (path.length === 0) {
    return null
  }

  return path
}
