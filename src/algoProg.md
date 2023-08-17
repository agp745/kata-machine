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

Research the following algorithms on your own for implimentation (not covered in ThePrimeagen's course):

- Array Buffer (Ring Buffer)

## Algorithms

### Search

- LinearSearchList.ts
- BinarySearchList.ts
- TwoCrystallBalls.ts

### Sort

- BubbleSort.ts
- QuickSort.ts

### Recursion

- MazeSolver.ts

## Linked Lists

- Queue.ts
- Stack.ts
- SinglyLinkedList.ts
- DoublyLinkedList.ts

### Arrays

- ArrayList.ts
