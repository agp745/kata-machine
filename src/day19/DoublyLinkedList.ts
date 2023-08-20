type Node<T> = {
    value: T
    next?: Node<T>
    prev?: Node<T>
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>

    private getAt(idx: number): Node<T> {
        let curr = this.head
        for(let i = 0; curr && i < idx; i++) {
            curr = curr.next
        }
        return curr as Node<T>
    }

    private removeNode(node: Node<T>): T | undefined {
        this.length--

        if(this.length === 0) {
            const out = node.value
            this.head = this.tail = undefined
            return out
        }

        if(node.next) {
            node.next.prev = node.prev
        }

        if(node.prev) {
            node.prev.next = node.next
        }

        if(node === this.head) {
            this.head = node.next 
        }

        if(node === this.tail) {
            this.tail = node.prev
        }
        
        return node.value
    }

    constructor() {
        this.length = 0
        this.head = this.tail = undefined
    }

    prepend(item: T): void {
        this.length++
        const node: Node<T> = {value: item}

        if(!this.head) {
            this.head = this.tail = node
        }

        node.next = this.head
        this.head.prev = node
        this.head = node
    }

    insertAt(item: T, idx: number): void {
        if(idx < 0 || idx > this.length) {
            return undefined
        }

        if(idx === 0) {
            this.prepend(item)
        } else if (idx === this.length) {
            this.append(item)
        }

        this.length++
        const curr = this.getAt(idx) as Node<T>
        const node: Node<T> = {value: item}

        node.next = curr
        node.prev = curr.prev
        curr.prev = node
        if(node.prev) {
            node.prev.next = node
        }
    }

    append(item: T): void {
        this.length++
        const node: Node<T> = {value: item}

        if(!this.tail) {
            this.head = this.tail = node
        }

        node.prev = this.head
        this.tail.next = node
        this.tail = node
    }

    remove(item: T): T | undefined {
        let curr = this.head 
        for(let i = 0; curr && i < this.length; i++) {
            if(curr.value === item) {
                break
            }
            curr = curr.next
        }

        if(!curr) {
            return undefined
        }

        this.removeNode(curr)

        return item
    }

    get(idx: number): T | undefined {
        if(idx < 0 || idx >= this.length) {
            return undefined
        }
        return this.getAt(idx).value
    }

    removeAt(idx: number): T | undefined {
        if(idx < 0 || idx >= this.length) {
            return undefined
        }
        const node = this.getAt(idx) as Node<T>
        this.removeNode(node)

        return node.value
    }

}