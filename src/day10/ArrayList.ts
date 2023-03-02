export default class ArrayList<T> {
    public length: number;
    private arr: T[]

    constructor() { 
        this.arr = []
        this.length = 0
    }
    prepend(item: T): void {
        this.length++
        this.arr.unshift(item)
    }
    insertAt(item: T, idx: number): void {
        if(idx < 0 || idx >= this.arr.length) {
            throw new Error(`Invalid index ${idx}`)
        }
        this.length++
        this.arr.splice(idx, 0, item)
    }
    append(item: T): void {
        this.length++
        this.arr.push(item)
    }
    remove(item: T): T | undefined {
        const index = this.arr.indexOf(item)
        if(index >= 0) {
            this.length--
            this.arr.splice(index, 1)
            return item
        }
        return undefined
    }
    get(idx: number): T | undefined {
        if(idx < 0 || idx >= this.arr.length) {
            return undefined
        }
        return this.arr[idx]
    }
    removeAt(idx: number): T | undefined {
        if(idx < 0 || idx >= this.arr.length) {
            return undefined
        }
        this.length--
        const item = this.arr[idx]
        this.arr.splice(idx, 1)
        return item
    }
}