export default class ArrayList<T> {
    public length: number;
    private array: T[]

    constructor() {
        this.length = 0
        this.array = []
    }

    prepend(item: T): void {
        this.length++
        this.array.unshift(item)
    }

    insertAt(item: T, idx: number): void {
        if(idx < 0 || idx >= this.length) throw new Error ('invalid index')
        this.length++
        this.array.splice(idx, 0, item)
    }

    append(item: T): void {
        this.length++
        this.array.push(item)
    }

    remove(item: T): T | undefined {
        const idx = this.array.indexOf(item)
        if(idx < 0 || idx >= this.length) return undefined

        this.length--
        this.array.splice(idx, 1)
        return item
    }

    get(idx: number): T | undefined {
        if(idx < 0 || idx >= this.length) return undefined
        return this.array[idx]
    }

    removeAt(idx: number): T | undefined {
        if(idx < 0 || idx >= this.length) return undefined
        this.length--

        const item = this.array[idx]
        this.array.splice(idx, 1)
        return item
    }

}