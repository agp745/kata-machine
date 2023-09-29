export default function bfs(
  graph: WeightedAdjacencyMatrix,
  source: number,
  needle: number,
): number[] | null {
  const prev: number[] = new Array(graph.length).fill(-1)
  const seen: boolean[] = new Array(graph.length).fill(false)

  seen[source] = true
  const q: number[] = [source]

  do {
    let curr = q.shift() as number
    if (curr === needle) {
      break
    }

    const adjs = graph[curr]
    for (let i = 0; i < adjs.length; i++) {
      if (adjs[i] === 0) {
        continue
      }
      if (seen[i]) {
        continue
      }

      seen[i] = true
      prev[i] = curr
      q.push(i)
    }
  } while (q.length)

  //build backwards
  if (prev[needle] === -1) {
    return null
  }

  let curr = needle
  const out: number[] = []

  while (prev[curr] !== -1) {
    out.push(curr)
    curr = prev[curr]
  }

  return [source, ...out.reverse()]
}
