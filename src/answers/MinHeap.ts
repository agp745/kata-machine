export default class MinHeap {
  public length: number
  private data: number[]

  constructor() {
    this.length = 0
    this.data = []
  }

  insert(value: number): void {
    this.data[this.length] = value
    this.heapUp(this.length)
    this.length++
  }

  delete(): number {
    if (this.length === 0) {
      return -1
    }

    const out = this.data[0]
    this.length--

    if (this.length === 0) {
      this.data = []
      return out
    }

    this.data[0] = this.data[this.length]
    this.heapDown(0)
    return out
  }

  private heapDown(idx: number): void {
    const lIdx = this.lChild(idx)
    const rIdx = this.rChild(idx)

    if (idx >= this.length || lIdx >= this.length) {
      return
    }

    const val = this.data[idx]
    const lVal = this.data[lIdx]
    const rVal = this.data[rIdx]

    if (lVal > rVal && val > rVal) {
      this.data[rIdx] = val
      this.data[idx] = rVal
      this.heapDown(rIdx)
    } else if (rVal > lVal && val > lVal) {
      this.data[lIdx] = val
      this.data[idx] = lVal
      this.heapDown(lIdx)
    }
  }

  private heapUp(idx: number): void {
    if (idx === 0) {
      return
    }

    const parent = this.parent(idx)
    const parentVal = this.data[parent]
    const val = this.data[idx]

    if (parentVal > val) {
      this.data[parent] = val
      this.data[idx] = parentVal
      this.heapUp(parent)
    }
  }

  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2)
  }

  private lChild(idx: number): number {
    return idx * 2 + 1
  }
  private rChild(idx: number): number {
    return idx * 2 + 2
  }
}
