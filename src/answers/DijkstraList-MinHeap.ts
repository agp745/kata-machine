type Node = {
  vertex: number
  distance: number
}
class MinHeap {
  public length: number
  private heap: Node[] = []

  constructor() {
    this.length = 0
    this.heap = []
  }

  insert(node: Node): void {
    this.heap[this.length] = node
    this.heapUp(this.length)
    this.length++
  }

  extractMin(): Node | null {
    if (this.length === 0) {
      return null
    }

    const min = this.heap[0]
    this.length--

    if (this.length === 0) {
      this.heap = []
      return min
    }

    this.heap[0] = this.heap[this.length]
    this.heapDown(0)
    return min
  }

  private heapDown(idx: number): void {
    const lIdx = this.lChild(idx)
    const rIdx = this.rChild(idx)

    if (idx >= this.length || lIdx >= this.length || rIdx >= this.length) {
      return
    }

    const node = this.heap[idx]
    const lNode = this.heap[lIdx]
    const rNode = this.heap[rIdx]

    if (lNode.distance > rNode.distance && node.distance > rNode.distance) {
      this.heap[rIdx] = node
      this.heap[idx] = rNode
      this.heapDown(rIdx)
    } else if (
      rNode.distance > lNode.distance &&
      node.distance > lNode.distance
    ) {
      this.heap[lIdx] = node
      this.heap[idx] = lNode
      this.heapDown(lIdx)
    }
  }

  private heapUp(idx: number): void {
    if (idx === 0) {
      return
    }

    const parent = this.parent(idx)
    const parentNode = this.heap[parent]
    const node = this.heap[idx]

    if (parentNode.distance > node.distance) {
      this.heap[parent] = node
      this.heap[idx] = parentNode
      this.heapUp(parent)
    }
  }

  public parent(idx: number): number {
    return Math.floor((idx - 1) / 2)
  }

  private lChild(idx: number): number {
    return idx * 2 + 1
  }
  private rChild(idx: number): number {
    return idx * 2 + 2
  }
}

export default function dijkstra_list(
  source: number,
  target: number,
  graph: WeightedAdjacencyList,
): number[] {
  const distances = new Array(graph.length).fill(Infinity)
  const prev = new Array(graph.length).fill(-1)
  distances[source] = 0

  const minHeap = new MinHeap()
  minHeap.insert({ vertex: source, distance: 0 })

  while (minHeap.length > 0) {
    const { vertex, distance } = minHeap.extractMin() as Node

    if (vertex === target) {
      break
    }

    const neighbors = graph[vertex]
    for (let i = 0; i < neighbors.length; i++) {
      const edge = neighbors[i]
      const newDist = distance + edge.weight

      if (newDist < distances[edge.to]) {
        distances[edge.to] = newDist
        prev[edge.to] = vertex
        minHeap.insert({ vertex: edge.to, distance: newDist })
      }
    }
  }

  if (prev.length === 0) {
    return []
  }

  const shortestPath: number[] = []
  let curr = target

  while (prev[curr] !== -1) {
    shortestPath.push(curr)
    curr = prev[curr]
  }

  return [source, ...shortestPath.reverse()]
}
