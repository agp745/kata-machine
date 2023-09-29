type TrieNode = {
  children: Map<string, TrieNode>
  isTerminal: boolean
}

export default class Trie {
  private root: TrieNode

  constructor() {
    this.root = {
      children: new Map(),
      isTerminal: false,
    }
  }

  insert(item: string): void {
    let currNode = this.root
    for (const char of item) {
      if (!currNode.children.has(char)) {
        currNode.children.set(char, {
          children: new Map(),
          isTerminal: false,
        })
      }
      currNode = currNode.children.get(char)!
    }
    currNode.isTerminal = true
  }

  delete(item: string): void {
    this.deleteRecursively(this.root, item, 0)
  }

  find(partial: string): string[] {
    let currNode = this.root
    for (const char of partial) {
      if (!currNode.children.has(char)) {
        return []
      }
      currNode = currNode.children.get(char)!
    }
    return this.getWords(currNode, partial)
  }

  private getWords(currNode: TrieNode, partial: string): string[] {
    const results: string[] = []
    if (currNode.isTerminal) {
      results.push(partial)
    }

    for (const [char, childNode] of currNode.children.entries()) {
      results.push(...this.getWords(childNode, partial + char))
    }

    return results
  }

  private deleteRecursively(
    currNode: TrieNode,
    word: string,
    idx: number,
  ): boolean {
    if (idx === word.length) {
      if (!currNode.isTerminal) {
        return false
      }
      currNode.isTerminal = false
      return currNode.children.size === 0
    }

    const char = word[idx]
    if (!currNode.children.has(char)) {
      return false
    }

    const shouldDelete = this.deleteRecursively(
      currNode.children.get(char)!,
      word,
      idx + 1,
    )
    if (shouldDelete) {
      currNode.children.delete(char)
      return true
    }

    return false
  }
}
