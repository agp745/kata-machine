interface Node<T> {
    value: T
    next?: Node<T>
}

export default class Queue<T> {

    public length: number;
    private head?: Node<T>
    private tail?: Node<T>

    constructor() {
        this.length = 0
        this.head = this.tail = undefined
    }

    enqueue(item: T): void {
        this.length++
        const node: Node<T> = {value: item} 

        if(!this.tail) {
            this.head = this.tail = node
        }

        this.tail.next = node
        this.tail = node

    }

    deque(): T | undefined {
        if (!this.head) return undefined
        this.length--

        if (this.length === 0) {
            this.tail = undefined
        }

        const head = this.head
        this.head = this.head.next
        return head.value
    }

    peek(): T | undefined {
        if (!this.head) return undefined
        
        return this.head.value
    }
}