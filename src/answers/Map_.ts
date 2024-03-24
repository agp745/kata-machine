export default class Map_<T extends string | number, V> {
  private lookup: Map<T, V>

  constructor() {
    this.lookup = new Map()
  }

  get(key: T): V | undefined {
    if (!this.lookup.has(key)) {
      return undefined
    }
    return this.lookup.get(key)
  }

  set(key: T, value: V): void {
    this.lookup.set(key, value)
  }

  delete(key: T): V | undefined {
    if (!this.lookup.has(key)) {
      return undefined
    }
    const out = this.lookup.get(key)
    this.lookup.delete(key)

    return out
  }

  size(): number {
    if (this.lookup.size === 0) {
      return 0
    }
    return this.lookup.size
  }
}
