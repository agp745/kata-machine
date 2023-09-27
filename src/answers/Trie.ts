type TrieNode = {
  children: Map<string, TrieNode>
  terminal: boolean
}

export default class Trie {
  private root: TrieNode

  constructor() {
    this.root = {
      children: new Map(),
      terminal: false,
    }
  }

  insert(item: string): void {
    let currNode = this.root
    for (const char of item) {
      if (!currNode.children.get(char)) {
        currNode.children.set(char, {
          children: new Map(),
          terminal: false,
        })
      }
      currNode = currNode.children.get(char)!
    }
    currNode.terminal = true
  }

  delete(item: string): void {
    this.deleteRecursive(this.root, item, 0)
  }

  find(partial: string): string[] {
    let currNode = this.root
    for (const char of partial) {
      if (!currNode.children.has(char)) {
        return []
      }
      currNode = currNode.children.get(char)!
    }
    return this.collectWords(currNode, partial)
  }

  private deleteRecursive(
    currNode: TrieNode,
    word: string,
    idx: number,
  ): boolean {
    if (idx === word.length) {
      if (!currNode.terminal) {
        return false
      }
      currNode.terminal = false
      return currNode.children.size === 0
    }

    let char = word[idx]
    if (!currNode.children.get(char)) {
      return false
    }

    const shouldDeleteChild = this.deleteRecursive(
      currNode.children.get(char)!,
      word,
      idx + 1,
    )

    if (shouldDeleteChild) {
      currNode.children.delete(char)
      return currNode.children.size === 0
    }

    return false
  }

  private collectWords(currNode: TrieNode, partial: string): string[] {
    const results: string[] = []
    if (currNode.terminal) {
      results.push(partial)
    }

    for (const [char, childNode] of currNode.children.entries()) {
      results.push(...this.collectWords(childNode, partial + char))
    }

    return results
  }
}
