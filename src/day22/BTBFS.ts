export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    let q: BinaryNode<number>[] = [head]
    
    while(q.length) {
        let curr = q.shift() as BinaryNode<number>

        if(curr.value === needle) {
            return true
        }
        
        if(curr.left) {
            q.push(curr.left)
        }
        if(curr.right) {
            q.push(curr.right)
        }
    }
    
    return false
}