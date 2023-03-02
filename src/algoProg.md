# ALGORITHM PROGRESS

Do these algorithms in this order. As you progress, you will add more algorithms to the list

## Testing

To test your algorithm, run the following command in your terminal

```bash
npx jest < fileName >
```

for example

```bash
npx jest LinearSearchList.ts
```

### Notes:

-   The file name does not have to be written out entirely to run tests...

    ```bash
    npx jest linear
    ```

-   in the ArrayList.ts test change the following code -

    ```typescript
    const list = new ArrayList<number>(3); //wrong

    const list = new ArrayList<number>(); //correct
    ```

## MISSING ALGORITHMS

Research the following algorithms on your own for implimentation (not covered in ThePrimeagen's course):

-   SinglyLinkedList.ts
-   DoublyLinkedList.ts

## Algorithms

### Search

-   LinearSearchList.ts
-   BinarySearchList.ts
-   TwoCrystallBalls.ts

### Sort

-   BubbleSort.ts
-   Queue.ts (GOOD)
-   Stack.ts (GOOD)

### Arrays

-   ArrayList.ts
-   (Array Buffer (ring buffer)) - not in here, maybe try to create the template and test for it!

### Recursion

-   MazeSolver.ts
