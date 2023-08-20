type Node<T> = {
    value: T
    next?: Node<T>
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>

    private getAt(idx: number): Node<T> | undefined{
        let curr = this.head
        for(let i = 0; curr && i < idx; i++) {
            curr = curr.next
        }
        return curr
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
        this.head = node
    }

    insertAt(item: T, idx: number): void {
        if(idx < 0 || idx > this.length) {
            throw new Error ('invalid index')
        }
        if(idx === 0) {
            this.prepend(item)
        } else if(idx === this.length) {
            this.append(item)
        }

        this.length++
        const curr = this.getAt(idx) as Node<T>
        const prev = this.getAt(idx - 1) as Node<T>
        const node: Node<T> = {value: item}

        node.next = curr
        prev.next = node
    }

    append(item: T): void {
        this.length++
        const node: Node<T> = {value: item}

        if(!this.tail) {
            this.head = this.tail = node
        }

        this.tail.next = node
        this.tail = node
    }

    remove(item: T): T | undefined {
        let curr = this.head
        let i = 0
        for(i; curr && i < this.length; i++) {
            if(curr.value === item) {
                break
            }
            curr = curr.next
        }

        if(!curr) {
            return undefined
        }

        this.length--

        if(this.length === 0) {
            const out = this.head?.value
            this.head = this.tail = undefined
            return out
        }

        const out = curr.value
        const prev = this.getAt(i - 1) as Node<T>

        if(prev) {
            prev.next = curr.next
        }

        if(curr === this.head) {
            this.head = curr.next
        }

        if(curr == this.tail) {
            this.tail = prev
        }
        
        curr.next = undefined

        return out
    }

    get(idx: number): T | undefined {
        if(idx < 0 || idx > this.length) {
            return undefined
        }
        return this.getAt(idx)?.value
    }

    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx) as Node<T>

        if(!node) {
            return undefined
        }

        this.length--

        if(this.length === 0) {
            const out = node.value
            this.head = this.tail = undefined
            return out
        }

        const prev = this.getAt(idx - 1) as Node<T>

        if(prev) {
            prev.next = node.next
        }

        if(node === this.head) {
            this.head = node.next
        }

        if(node === this.tail) {
            this.tail = prev
        }

        node.next = undefined

        return node.value
    }

}