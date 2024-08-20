# LinkedList Implementation

This is a simple implementation of a singly linked list in JavaScript.

## Features

1. **prepend(data)**: Prepends a new node with the given data to the linked list.
2. **pop()**: Removes the last node from the linked list.
3. **removeAt(index)**: Removes the node at the specified index from the linked list.
4. **insertAt(data, index)**: Inserts a new node with the given data at the specified index in the linked list.

## Usage

1. **Prepend a node:**

   ```javascript
   const LinkedList = require("./LinkedList");

   const list = new LinkedList();
   list.prepend(10);
   list.prepend(20);
   ```

2. **Pop the last node:**

   ```javascript
   const popped = list.pop();
   console.log(popped); // Outputs the data of the last node
   ```

3. **Remove a node at a specific index:**

   ```javascript
   const removed = list.removeAt(1);
   console.log(removed); // Outputs the data of the removed node
   ```

4. **Insert a node at a specific index:**

   ```javascript
   list.insertAt(30, 1);
   ```

## Contribution

1. Murarji Pantala
2. Akshith kudumula
3. Krishna Prasad Kondra
4. Ibraheem Khaleel

## Setup

- Run `npm install` to install necessary dependencies (if any).
- Ensure code formatting with Prettier by running `npx prettier --write .`.
- Push your commits to GitHub.

## License

This project is licensed under the MIT License.
