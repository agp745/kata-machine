function search(curr: BinaryNode<number> | null, path: number[]): number[] {
    if(!curr) {
        return path
    }

    path.push(curr.value)
    search(curr.left, path)
    search(curr.right, path)

    return path
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return search(head, [])
}