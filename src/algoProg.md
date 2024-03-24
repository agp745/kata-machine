# ALGORITHM PROGRESS

Do these algorithms in this order. As you progress, you will add more algorithms to the list

## Generating Days / Algoroithms

To geneare a new day/set of algorithms, run the following command in the root level of the kata-machine

```bash
npm run generate
```

## Testing

To test your algorithm, run the following command in your terminal

```bash
npx jest < fileName >
```

for example

```bash
npx jest LinearSearchList.ts
```

### Notes

- The file name does not have to be written out entirely to run tests...

    ```bash
    npx jest linear
    ```

- in the ArrayList.ts test change the following code -

    ```typescript
    const list = new ArrayList<number>(3); //wrong

    const list = new ArrayList<number>(); //correct
    ```

## MISSING ALGORITHMS

The following Data Structures & Algorithms are not covered in ThePrimeagen's course:

- Array Buffer (Ring Buffer)
- Singly Linked List
- Trie
- Map
- Insertion Sort
- Merge Sort
- PrimsList

## Algorithms

### Search

- LinearSearchList.ts
- BinarySearchList.ts
- TwoCrystallBalls.ts

## Linked Lists

- Queue.ts
- Stack.ts
- SinglyLinkedList.ts
- DoublyLinkedList.ts

### Arrays

- ArrayList.ts

### Sort

- BubbleSort.ts
- QuickSort.ts

### Recursion

- MazeSolver.ts

### Tree Traversal

- BTPreOrder.ts
- BTInOrder.ts
- BTPostOrder.ts

### Tree Search

- BTBFS.ts
- CompareBinaryTrees.ts
- DFSOnBST.ts

### Heap

- MinHeap.ts
- Trie.ts

### Graphs

- BFSGraphMatrix.ts
- DFSGraphList.ts
- DijkstraList.ts

### Maps

- Map.ts
- LRU.ts
